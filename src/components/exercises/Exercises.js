import { useEffect } from "react";

import ExercisesCard from "../exercisesCard/ExercisesCard";
import useFitnessService from "../../service/FitnessService";
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from "../spinner/Spinner";

import './exercises.scss';

const Exercises = ({exercises, bodyPart, setExercises}) => {
  const {loading, error, getExercises} = useFitnessService();

  useEffect(() => {
    if (bodyPart != 'all') {
      getExercises(`/bodyPart/${bodyPart}`)
        .then(setExercises)
    }
  }, [bodyPart])

  const content = exercises.map((exercise) => {
    return <ExercisesCard key={exercise.id} exercise={exercise}/>
  })

  const errorMessage = error ? <ErrorMessage/> : null;
  const spinner = loading ? <Spinner/> : null;

    return (
    <div className="exercises">
        <p className="exercises__results">
            Showing Results
        </p>
        <div className="exercises__container">
            {errorMessage || spinner || content}
        </div>
    </div>
  )
}

export default Exercises