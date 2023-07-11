

import BodyPart from '../bodyPart/BodyPart';


import './horisontalScrollBar.scss';

function HorisontalScrollBar(props) {
  const {bodyPart, bodyParts, setBodyPart} = props;

  const cards = bodyParts.map((item) => {
    return (
            <div key = {item.id || item}
                 itemID = {item.id || item}
                 title = {item.id || item}
                  className="horisontalScrollBar__item">
              <BodyPart item={item}
                        bodyPart={bodyPart}
                        setBodyPart={setBodyPart}
              />
            </div>
    )
  });
  return (
    <div className='horisontalScrollBar'>
        {cards}
    </div>
  )
}


export default HorisontalScrollBar