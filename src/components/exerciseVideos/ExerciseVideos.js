import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from "../spinner/Spinner";

import './exerciseVideos.scss';

const ExerciseVideos = ({exerciseVideos, name, loading, error}) => {
  const renderIrems = (items) => {
    return (items.slice(0, 6).map((item, i) => {

        let {title, channelName} = item.video;

        if (title.length > 49) {
            title = `${title.slice(0, 47)} + ...`; 
        }

        return (
            <a className='exercise_video' 
               key={i}
               href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
               target="_black"
               rel="noreferrer"
            >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} /> 
            <div>
                <h5>Video name: <span>{title}</span></h5>
                <h6>Author: <span>{channelName}</span></h6>
            </div>

            </a>
        )
    }))
}

  const errorMessage = error ? <ErrorMessage/> : null;
  const spinner = loading ? <Spinner/> : null;
  const content = !loading ? renderIrems(exerciseVideos) : null;

  return (
    <div className="exerciseVideos">
      <h4 className="exerciseVideos_title">
          Watch <span>{name}</span> exercise videos!
      </h4>
      <div className="exerciseVideos_box">
        {errorMessage || spinner || content}
      </div>
    </div>
  )
}

export default ExerciseVideos