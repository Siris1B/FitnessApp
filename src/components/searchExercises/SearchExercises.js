import { useState, useEffect } from 'react';
import useFitnessService from '../../service/FitnessService';
import { useDispatch, useSelector } from 'react-redux';

import {exercisesFetching, exercisesFetched, exercisesFetchingError, bodyPartsFetching, bodyPartsFetched, bodyPartsFetchingError, newValueSubmitted} from '../../actions'

import HorisontalScrollBar from '../horisontalScrollBar/HorisontalScrollBar';

import './searchExercises.scss';

const SearchExercises = () => {
  const {getBodyParts, getExercises} = useFitnessService();
  const dispatch = useDispatch();
  const {bodyParts} = useSelector(state => state)
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    dispatch(bodyPartsFetching());
    getBodyParts()
      .then(data => dispatch(bodyPartsFetched(data)))
      .catch(() => dispatch(bodyPartsFetchingError()))

      dispatch(exercisesFetching())
        getExercises()
          .then(data => dispatch(exercisesFetched(data)))
          .catch(() => dispatch(exercisesFetchingError()))
    // eslint-disable-next-line
  }, [])

  const onRequest = async () => {
    dispatch(newValueSubmitted(searchValue));
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
          <HorisontalScrollBar bodyParts={bodyParts}/>
        }
    </div>

  )
}

export default SearchExercises