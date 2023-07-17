import ExercisesCard from '../exercisesCard/ExercisesCard';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from "../spinner/Spinner";

import './similarTarget.scss';

const SimilarTarget = ({loading, error, target, exercisesForCard}) => { 
  const renderIrems = (items) => {
    return (items.slice(0, 3).map((item, i) => {
        return (
            <ExercisesCard key={item.id} exercise={item}/>
        )
    }))
}

  const errorMessage = error ? <ErrorMessage/> : null;
  const spinner = loading ? <Spinner/> : null;
  const content = !loading ? renderIrems(exercisesForCard) : null;

  return (
    <div className="similarTarget">
      <h4 className="similarTarget_title">
          Exercises that target the same muscle group
      </h4>
      <div className="similarTarget_box">
        {errorMessage || spinner || content}
      </div>
    </div>
  )
}

export default SimilarTarget;