import { useDispatch, useSelector } from 'react-redux';
import { setNewBodyPart } from '../../actions';

import gym from '../../resources/icons/gym.png';
import './bodyPart.scss';

const BodyPart = ({item}) => {
  const dispatch = useDispatch();
  const {activeBodyPart} = useSelector(state => state);

  const newClass = `${(activeBodyPart === item) ? 'bodyPart_active' : ''} bodyPart__button`;
  return (
    <button className={newClass}
            onClick={() => {
              dispatch(setNewBodyPart(item))
            }}>
            {/* window.scrollTo({top: 2000, left: 100, behavior: 'smooth'}) */}
            <img src={gym} alt={item} className="bodyPart__img" />
            <div className="bodyPart__title">{item}</div>
    </button>
  )
}

export default BodyPart