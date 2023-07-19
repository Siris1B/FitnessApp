import { useState, useEffect } from 'react';

import './pagination.scss';
import left from '../../resources/icons/leftArrow.png';
import right from '../../resources/icons/rightArrow.png';


const Pagination = ({totalExercises, currentPage, setCurrentPage, exercisesPerPage, exercises}) => {
  
    useEffect(() => {setCurrentPage(1)}, [exercises]) //
    
    let pages = [];

    for(let i = 1; i <= Math.ceil(totalExercises/exercisesPerPage); i++) {
        pages.push(i)
    }
  
    const [arrOfCurrentPages, setArrOfCurrentPages] = useState([]);

    useEffect(() => {
        let tempNumberOfPages = [...pages];
        if (currentPage >= 1 && currentPage < 4) {
            tempNumberOfPages = [1, 2, 3, 4, 5, `...`, pages.length];
        }        
        else if ( currentPage === 4 ) {
            const sliced = pages.slice(2, 5)
            tempNumberOfPages = [1, '...', ...sliced, `...`, pages.length];
        }
        else if ( currentPage > 4 && currentPage < pages.length - 2) {
            const sliced1 = pages.slice(currentPage - 2, currentPage);
            const sliced2 = pages.slice(currentPage, currentPage + 1);
            tempNumberOfPages = [1, '...', ...sliced1, ...sliced2, '...', pages.length]
        }
        else if ( currentPage > pages.length - 3) {
            const sliced = pages.slice(pages.length - 4);
            tempNumberOfPages = [1, '...', ...sliced];
        }
        setArrOfCurrentPages(tempNumberOfPages)
    }, [currentPage])


    return (
        <ul className="pagination">
            <li className='pagination__button'>
                <button onClick={() => setCurrentPage((prev) => prev - 1)}
                        disabled={currentPage === pages[0] ? true : false}>
                    <img src={left} alt="leftArrow" className='pagination__img' />
                </button>
            </li>
            {
                arrOfCurrentPages.map((page, index) => {

                    if (!(page === `...`)) {
                        return ( 
                                    <li key={index}
                                        onClick={() => setCurrentPage(page)}
                                        className={page === currentPage ? 'pagination__button  pagination_active' : 'pagination__button'}
                                    >
                                        {page}
                                    </li> 
                                )
                    }
                    else {
                        return ( 
                            <li key={index}
                                className='pagination__notButton'
                            >
                                {page}
                            </li> 
                        )
                    }
                })
            }
            <li className='pagination__button'>
                <button onClick={() => setCurrentPage((prev) => prev + 1)}
                        disabled={currentPage === pages[pages.length - 1] ? true : false}>
                    <img src={right} alt="rightArrow" className='pagination__img'/>
                </button>
            </li>
        </ul>
    )
}

export default Pagination;

