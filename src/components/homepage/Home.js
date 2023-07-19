import { useState } from 'react';

import HeroBanner from "../herobanner/HeroBanner"
import SearchExercises from "../searchExercises/SearchExercises"
import Exercises from '../exercises/Exercises';
import Pagination from '../pagination/Pagination';

const HomePage = () => {
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);
  const [newExercisesLoading, setNewExercisesLoading] = useState(false);
  const [newExercisesError, setNewExercisesError] = useState(false);

  const [currentPage, setCurrentPage] = useState(1); //
  const [exercisesPerPage, setExercisesPerPage] = useState(9); //

  const lastExerciseIndex = currentPage * exercisesPerPage; //
  const firstExerciseIndex = lastExerciseIndex - exercisesPerPage; //
  const currentExercises = exercises.slice(firstExerciseIndex, lastExerciseIndex); //

  return (
    <>
        <HeroBanner/>
        <SearchExercises bodyPart={bodyPart}
                         setBodyPart={setBodyPart}
                         setExercises={setExercises} 
                         setNewExercisesLoading={setNewExercisesLoading}
                         setNewExercisesError={setNewExercisesError}
        />
        <Exercises exercises={currentExercises}
                   bodyPart={bodyPart}
                   setExercises={setExercises} 
                   newExercisesLoading={newExercisesLoading}
                   newExercisesError={newExercisesError}
        />           
        <Pagination exercises={exercises}
                    totalExercises={exercises.length}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    exercisesPerPage={exercisesPerPage}
                    /> 
    </>
  )
}

export default HomePage