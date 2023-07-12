import { useState, useEffect } from 'react';

import useFitnessService from '../../service/FitnessService';

import HorisontalScrollBar from '../horisontalScrollBar/HorisontalScrollBar';

import './searchExercises.scss';

const SearchExercises = (props) => {
  const {bodyPart, setBodyPart, setExercises} = props;
  const {loading, error, getBodyParts, getExercises} = useFitnessService();
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    getBodyParts()
      .then(setBodyParts)
  }, [])

  useEffect(() => {
    getExercises()
      .then(setExercises)
  }, [])


  return (
    <div className="searchExercises">
        <p className="searchExercises__tagline">
            Awesome Exercises You<br/>Should Know
        </p>
        <div className="searchExercises__search">
            <input type="text" 
                    className="searchExercises__input"
                    placeholder="Search Exercises" 
            />
            <button className="searchExercises__button button">
                Search 
            </button>
        </div>
        <HorisontalScrollBar bodyPart={bodyPart}
                                 bodyParts={bodyParts}
                                 setBodyPart={setBodyPart} />
    </div>

  )
}

export default SearchExercises