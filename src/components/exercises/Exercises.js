import { useEffect } from "react";

import ExercisesCard from "../exercisesCard/ExercisesCard";
import useFitnessService from "../../service/FitnessService";
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from "../spinner/Spinner";

import './exercises.scss';

const Exercises = ({exercises, bodyPart, setExercises, newExercusesLoading, newExercisesError}) => {
  const {loading, error, getExercises} = useFitnessService();

  useEffect(() => {
    if (bodyPart != 'all') {
      getExercises(`/bodyPart/${bodyPart}`)
        .then(setExercises)
    }
  }, [bodyPart])



  const errorMessage = (error || newExercisesError) ? <ErrorMessage/> : null;
  const spinner = (loading || newExercusesLoading) ? <Spinner/> : null;
  const content = !(loading || newExercusesLoading || errorMessage) ? exercises.map((exercise) => {
    return <ExercisesCard key={exercise.id} exercise={exercise}/>
  }) : null;

    return (
    <div className="exercises" id='exercises'>
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