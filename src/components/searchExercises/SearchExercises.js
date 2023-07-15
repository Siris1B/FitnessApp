import { useState, useEffect } from 'react';

import useFitnessService from '../../service/FitnessService';
import HorisontalScrollBar from '../horisontalScrollBar/HorisontalScrollBar';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';

import './searchExercises.scss';

const SearchExercises = (props) => {
  const {bodyPart, setBodyPart, setExercises} = props;
  const {loading, error, getBodyParts, getExercises} = useFitnessService();
  const [bodyParts, setBodyParts] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    getBodyParts()
      .then(setBodyParts)
    
    getExercises()
      .then(setExercises)
  }, [])

  const onRequest = async () => {
    const result = await getExercises()

    const searchedExercises = result.filter((exercise) => {
      return exercise.bodyPart.toLowerCase().includes(searchValue) ||
             exercise.target.toLowerCase().includes(searchValue) ||  
             exercise.name.toLowerCase().includes(searchValue) ||
             exercise.equipment.toLowerCase().includes(searchValue);
    });

    setExercises(searchedExercises);
    setSearchValue('');
  }

  const onValueChange = (text) => {
    setSearchValue(text)
  }


  return (
    <div className="searchExercises">
        <p className="searchExercises__tagline">
            Awesome Exercises You<br/>Should Know
        </p>
        <div className="searchExercises__search">
            <input type="text"
                    name="searchValue"
                    className="searchExercises__input"
                    placeholder="Search Exercises"
                    onChange={(e) => {onValueChange(e.target.value.toLowerCase())}}
                    value={searchValue}
            />
            <button className="searchExercises__button button"
                    onClick={onRequest}
            >
                Search 
            </button>
        </div>
        {
          loading ? <Spinner/> : <HorisontalScrollBar bodyPart={bodyPart}
                               bodyParts={bodyParts}
                               setBodyPart={setBodyPart} />
        }
    </div>

  )
}

export default SearchExercises