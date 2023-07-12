import { useState, useEffect } from 'react';

import useFitnessService from '../../service/FitnessService';
import HeroBanner from "../herobanner/HeroBanner"
import SearchExercises from "../searchExercises/SearchExercises"
import Exercises from '../exercises/Exercises';

const HomePage = () => {
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);

  return (
    <>
        <HeroBanner/>
        <SearchExercises bodyPart={bodyPart}
                         setBodyPart={setBodyPart}
                         setExercises={setExercises} 
        />
        <Exercises exercises={exercises}/> 
    </>
  )
}

export default HomePage