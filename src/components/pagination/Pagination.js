import './pagination.scss';
import left from '../../resources/icons/leftArrow.png';
import right from '../../resources/icons/rightArrow.png';


const Pagination = ({totalExercises, exercisesPerPage, setCurrentPage, currentPage, minPageNumberLimit, maxPageNumberLimit, setMaxPageNumberLimit, setMinPageNumberLimit, pageNumberLimit}) => {
    let pages = [];

    for(let i = 1; i <= Math.ceil(totalExercises/exercisesPerPage); i++) {
        pages.push(i)
    }

    const handleNextBtn = () => {
        setCurrentPage(currentPage + 1);

        if (currentPage + 1 > maxPageNumberLimit) {
            setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        } 
    }

    const handlePrevBtn = () => {
        setCurrentPage(currentPage - 1);

        if ((currentPage - 1) % pageNumberLimit == 0) {
            setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
    }
  
    let pageIncrementBtn = null;
    if (pages.length > maxPageNumberLimit) {
        pageIncrementBtn = <li onClick={handleNextBtn}> &hellip; </li>
    }

    let pageDecrementBtn = null;
    if (minPageNumberLimit >= 1) {
        pageDecrementBtn = <li onClick={handlePrevBtn}> &hellip; </li>
    }

    return (
        <ul className="pagination">
            <li className='pagination__button'>
                <button onClick={handlePrevBtn}
                        disabled={currentPage === pages[0] ? true : false}>
                    <img src={left} alt="leftArrow" className='pagination__img' />
                </button>
            </li>
            {pageDecrementBtn}
            {
                pages.map((page, index) => {
                    if (page < maxPageNumberLimit + 1 && page > minPageNumberLimit) {
                        return ( 
                                    <li key={index}
                                        onClick={() => setCurrentPage(page)}
                                        className={page == currentPage ? 'pagination__button  pagination_active' : 'pagination__button'}
                                    >
                                        {page}
                                    </li> 
                                )
                    }
                    else {
                        return null;
                    }
                })
            }
            {pageIncrementBtn}
            <li className='pagination__button'>
                <button onClick={handleNextBtn}
                        disabled={currentPage === pages[pages.length - 1] ? true : false}>
                    <img src={right} alt="rightArrow" className='pagination__img'/>
                </button>
            </li>
        </ul>
    )
}

export default Pagination;

