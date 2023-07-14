import { useState, useEffect } from 'react';

import useFitnessService from '../../service/FitnessService';
import HeroBanner from "../herobanner/HeroBanner"
import SearchExercises from "../searchExercises/SearchExercises"
import Exercises from '../exercises/Exercises';
import Pagination from '../pagination/Pagination';

const HomePage = () => {
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage, setExercisesPerPage] = useState(9);

  useEffect(() => {setCurrentPage(1)}, [exercises])

  const lastExerciseIndex = currentPage * exercisesPerPage;
  const firstExerciseIndex = lastExerciseIndex - exercisesPerPage;
  const currentExercises = exercises.slice(firstExerciseIndex, lastExerciseIndex);

  return (
    <>
        <HeroBanner/>
        <SearchExercises bodyPart={bodyPart}
                         setBodyPart={setBodyPart}
                         setExercises={setExercises} 
        />
        <Exercises exercises={currentExercises}/> 
        <Pagination totalExercises={exercises.length}
                    exercisesPerPage={exercisesPerPage}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}/>
    </>
  )
}

export default HomePage