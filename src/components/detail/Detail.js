import BodyPartImage from '../../resources/icons/body-part.png';
import TargetImage from '../../resources/icons/target.png';
import EquipmentImage from '../../resources/icons/equipment.png';

import './detail.scss';

const Detail = (props) => {
  const {bodyPart, target, equipment, gifUrl, name} = props.exerciseDetail
  const extraDetail = [
    {
        icon: BodyPartImage,
        name: bodyPart
    },
    {
        icon: TargetImage,
        name: target
    },
    {
        icon: EquipmentImage,
        name: equipment
    }
  ]

  let extraDetailBlock = extraDetail.map((item, i) => {
    return (
        <div key={i} className="detail__extra">
            <div className=" detail__extra__button">
                <img src={item.icon} alt={item.name} />
            </div>
            <h5 className="detail__extra__descr">
                {item.name}
            </h5>
        </div>
    )
})

return (
    <div className="detail">
        <img src={gifUrl} alt={name} loading = 'lazy' className="detail__image" />
        <div className="detail__text">
            <h2 className="detail__text-title">
                {name}
            </h2>
            <h6 className="detail__text-subtitle">
                Exercises keep you strong. {name} {' '}
                is one of the best exercises to target your {target}. 
                It will help you improve your mood and gain energy.
            </h6>
            <div className="detail__forExtra">
                {extraDetailBlock}
            </div>
        </div>
    </div>
)
}

export default Detail;