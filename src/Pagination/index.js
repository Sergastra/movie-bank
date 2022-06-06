import Pagi from '@material-ui/lab/Pagination';
import "../style.css"

const Pagination = ({setPage, numOfPages = 10}) => {

    const handlePageChange = (page) => {
        setPage(page);
        window.scroll( 0, 0);
    };
    
    return (
        <div className = "page-pagination">
            <Pagi 
                count={numOfPages} 
                onChange={(e) => handlePageChange(e.target.textContent)} 
            />
        </div>
    );
};

export default Pagination;
