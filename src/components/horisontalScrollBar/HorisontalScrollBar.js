import BodyPart from '../bodyPart/BodyPart';

import './horisontalScrollBar.scss';

function HorisontalScrollBar({bodyParts}) {
  const cards = bodyParts.map((item) => {
    return (
            <div key = {item.id || item}
                 itemID = {item.id || item}
                 title = {item.id || item}
                  className="horisontalScrollBar__item">
              <BodyPart item={item}/>
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