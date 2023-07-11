import { useState } from 'react';

import HeroBanner from "../herobanner/HeroBanner"
import HorisontalScrollBar from "../horisontalScrollBar/HorisontalScrollBar"
import SearchExercises from "../searchExercises/SearchExercises"

const HomePage = () => {
  const [bodyPart, setBodyPart] = useState('all');
  return (
    <>
        <HeroBanner/>
        <SearchExercises bodyPart={bodyPart}
                         setBodyPart={setBodyPart} />
        
    </>
  )
}

export default HomePage