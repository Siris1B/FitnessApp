
import gym from '../../resources/icons/gym.png';

import './bodyPart.scss';

const BodyPart = (props) => {
  const {item, bodyPart, setBodyPart} = props;
  const newClass = `${(bodyPart === item) ? 'bodyPart_active' : ''} bodyPart__button`;
  return (
    <button className={newClass}
            onClick={() => {
              setBodyPart(item)
            }}>
            {/* window.scrollTo({top: 2000, left: 100, behavior: 'smooth'}) */}
            <img src={gym} alt={item} className="bodyPart__img" />
            <div className="bodyPart__title">{item}</div>
    </button>
  )
}

export default BodyPart