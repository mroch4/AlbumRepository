import React, { FC, MouseEventHandler } from "react";

interface Pagination {
  nextPageHandler: MouseEventHandler;
  previuosPageHandler: MouseEventHandler;
  currentPage: number;
  totalPages: number;
}

const Navigation: FC<Pagination> = ({ nextPageHandler, previuosPageHandler, currentPage, totalPages }): JSX.Element => (
  <div className="pagination my-4">
    <button className="btn btn-secondary" onClick={previuosPageHandler} disabled={currentPage === 0 ? true : false}>
      {"<"}
    </button>
    <span className="mx-3">
      Page {currentPage + 1} of {totalPages}
    </span>
    <button className="btn btn-secondary" onClick={nextPageHandler} disabled={currentPage + 1 >= totalPages ? true : false}>
      {">"}
    </button>
  </div>
);

export default Navigation;
