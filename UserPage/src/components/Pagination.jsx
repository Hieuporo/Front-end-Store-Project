import { useState } from "react";
import ReactPaginate from "react-paginate";
import "bootstrap/dist/css/bootstrap.min.css";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col text-center">
          {/* Nội dung trang hiện tại */}
          <h2>Page {currentPage + 1}</h2>

          {/* Các thành phần khác trong trang */}
        </div>
      </div>

      <div className="row">
        <div className="col d-flex justify-content-center">
          {/* Phân trang */}
          <ReactPaginate
            previousLabel={"Prev"}
            nextLabel={"Next"}
            breakLabel={"..."}
            pageCount={10} // Tổng số trang
            marginPagesDisplayed={3}
            pageRangeDisplayed={3}
            onPageChange={handlePageChange}
            containerClassName={"pagination"}
            activeClassName={"active"}
          />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
