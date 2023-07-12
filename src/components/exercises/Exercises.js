import ExercisesCard from "../exercisesCard/ExercisesCard";

import './exercises.scss';

const Exercises = (props) => {
  const {exercises} = props;

  const content = exercises.map((exercise) => {
    return <ExercisesCard key={exercise.id} exercise={exercise}/>
  })
    return (
    <div className="exercises">
        <p className="exercises__results">
            Showing Results
        </p>
        <div className="exercises__container">
            {content}
        </div>
    </div>
  )
}

export default Exercises