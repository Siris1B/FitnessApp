import './pagination.scss';

const Pagination = (props) => {
    const {totalExercises, exercisesPerPage, setCurrentPage, currentPage} = props;
    let pages = [];

    for(let i = 1; i <= Math.ceil(totalExercises/exercisesPerPage); i++) {
        pages.push(i)
    }
  
    return (
        <div className="pagination">
            {
                pages.map((page, index) => {
                    return <button key={index}
                                   onClick={() => setCurrentPage(page)}
                                   className={page == currentPage ? 'pagination__button  pagination_active' : 'pagination__button'}
                                   >{page}
                            </button>
                })
            }
        </div>
    )
}

export default Pagination