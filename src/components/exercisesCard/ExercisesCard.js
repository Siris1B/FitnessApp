import './exercisesCard.scss';

const ExercisesCard = (props) => { 
  const {bodyPart, target, name, gifUrl, id} = props.exercise
  return (
    <div className="exercisesCard">
        <a href={id}
           className="exerciseCard__body"
        >
            <img src={gifUrl} 
                 alt={name} 
                 className="exerciseCard__img" 
                 loading='lazy'
            />
            <div className="exerciceCard__body">
                <div className="exerciseCard__buttons">
                    <div className="exerciseCard__niceButton">
                        {bodyPart}
                    </div>
                    <div className="exerciseCard__niceButton">
                        {target}
                    </div>
                </div>
                <div className="exerciseCard__exerciseName">
                    {name}
                </div>
            </div>

        </a>
    </div>
  )
}

export default ExercisesCard