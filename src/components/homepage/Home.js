import { useState, useEffect } from 'react';

import HeroBanner from "../herobanner/HeroBanner"
import SearchExercises from "../searchExercises/SearchExercises"
import Exercises from '../exercises/Exercises';
import Pagination from '../pagination/Pagination';

const HomePage = () => {
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);

  const [currentPage, setCurrentPage] = useState(1); //
  const [exercisesPerPage, setExercisesPerPage] = useState(9); //
  const [pageNumberLimit, setPageNumberLimit] = useState(9);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(9);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  useEffect(() => {setCurrentPage(1)}, [exercises]) //

  const lastExerciseIndex = currentPage * exercisesPerPage; //
  const firstExerciseIndex = lastExerciseIndex - exercisesPerPage; //
  const currentExercises = exercises.slice(firstExerciseIndex, lastExerciseIndex); //

  return (
    <>
        <HeroBanner/>
        <SearchExercises bodyPart={bodyPart}
                         setBodyPart={setBodyPart}
                         setExercises={setExercises} 
        />
        <Exercises exercises={currentExercises}
                   bodyPart={bodyPart}
                   setExercises={setExercises} 
        />           
        <Pagination totalExercises={exercises.length}
                    exercisesPerPage={exercisesPerPage}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                    maxPageNumberLimit={maxPageNumberLimit}
                    minPageNumberLimit={minPageNumberLimit}
                    setMaxPageNumberLimit={setMaxPageNumberLimit}
                    setMinPageNumberLimit={setMinPageNumberLimit}
                    pageNumberLimit={pageNumberLimit}
        /> 
    </>
  )
}

export default HomePage