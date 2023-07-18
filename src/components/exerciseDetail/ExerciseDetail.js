import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from "../spinner/Spinner";
import Detail from "../detail/Detail";
// import SimilarTarget from '../similarTarget/SimilarTarget';
import ExerciseVideos from "../exerciseVideos/ExerciseVideos";
import useFitnessService from '../../service/FitnessService';

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  // const [exercisesForCard, setExercisesForCard] = useState([]);
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const {loading, error, getExercises, getVideos, clearError} = useFitnessService();
  const {exerciseId} = useParams();
  

  useEffect(() => {
    getExercises(`/exercise/${exerciseId}`)
      .then(setExerciseDetail);

    // getExercises(`/target/${exerciseDetail.target}`)
    //   .then(res => setExercisesForCard(res));  
      
    getVideos(`/search?query=${exerciseDetail.name}`)
      .then((res) => setExerciseVideos(res.contents));

    
  }, [])

  const errorMessage = error ? <ErrorMessage/> : null;
  const spinner = loading ? <Spinner/> : null;
  const content = (
    <>
        <Detail exerciseDetail={exerciseDetail}/>
        <ExerciseVideos exerciseVideos={exerciseVideos}
                        name={exerciseDetail.name} 
                        loading={loading}
                        error={error}
        />
        {/* <SimilarTarget  target={exerciseDetail.target} 
                        loading={loading}
                        error={error}
                        exercisesForCard={exercisesForCard}
        /> */}
    </>
  )

  return (
    <>
        {errorMessage || spinner || content}
    </>
  ) 
}

export default ExerciseDetail;