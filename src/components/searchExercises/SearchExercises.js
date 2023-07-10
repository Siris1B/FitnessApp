import './searchExercises.scss';

const SearchExercises = () => {
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
    </div>

  )
}

export default SearchExercises