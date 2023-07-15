import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


import Detail from "../detail/Detail";
import ExerciseVideos from "../exerciseVideos/ExerciseVideos";
import useFitnessService from '../../service/FitnessService';

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVIdeos] = useState([]);
  const {loading, error, getBodyParts, getExercises, getVideos, clearError} = useFitnessService();
  const {exerciseId} = useParams();

  useEffect(() => {
    getExercises(`/exercise/${exerciseId}`)
      .then(setExerciseDetail);

    getVideos(`/search?query=${exerciseDetail.name}`)
      .then(setExerciseVIdeos);
  }, [])

  return (
    <>
        <Detail exerciseDetail={exerciseDetail}/>
        <ExerciseVideos exerciseVideos={exerciseVideos}
                        name={exerciseDetail.name} 
        />
    </>
  ) 
}

export default ExerciseDetail;