import { useDispatch, useSelector } from 'react-redux';

import ExercisesCard from "../exercisesCard/ExercisesCard";
import useFitnessService from "../../service/FitnessService";
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from "../spinner/Spinner";

import './exercises.scss';

const Exercises = () => {
    const dispatch = useDispatch();
    const {exercisesLoadingStatus ,filteredExercises} = useSelector(state => state)

    const content = exercisesLoadingStatus != 'idle' ? 'wait' : filteredExercises.map((exercise) => {
      return <ExercisesCard key={exercise.id} exercise={exercise}/>
    })


    return (
    <div className="exercises" id='exercises'>
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