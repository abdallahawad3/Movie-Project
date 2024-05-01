import ReactPaginate from 'react-paginate';
const PaginationCard = ({getPage,allPages}) => {

  const handlePageClick = (data) =>{
    getPage(data.selected + 1);
  }

  let pageCount = allPages;
  return (
    <>
      <ReactPaginate
        className="pagination pagination-main"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        nextClassName="page-item"
        previousLinkClassName="page-link"
        nextLinkClassName="page-link"
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        breakClassName="page-item"
        breakLinkClassName="page-link"
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        activeClassName='active'
      />
    </>
    
  )
}

export default PaginationCard