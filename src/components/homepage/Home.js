import HeroBanner from "../herobanner/HeroBanner"
import SearchExercises from "../searchExercises/SearchExercises"
import Exercises from '../exercises/Exercises';
import Pagination from '../pagination/Pagination';

const HomePage = () => {
  return (
    <>
        <HeroBanner/>
        <SearchExercises/>
        <Exercises/>
        {/* <Pagination exercises={exercises}
                    totalExercises={exercises.length}
                    setCurrentExercises={setCurrentExercises}
                    />  */}
    </>
  )

}

export default HomePage