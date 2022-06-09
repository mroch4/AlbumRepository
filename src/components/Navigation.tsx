import React, { FC, MouseEventHandler } from "react";
import LABELS from "../common/Labels";

interface Pagination {
  nextPageHandler: MouseEventHandler;
  previuosPageHandler: MouseEventHandler;
  currentPage: number;
  totalPages: number;
}

const Navigation: FC<Pagination> = (props): JSX.Element => {
  const { nextPageHandler, previuosPageHandler, currentPage, totalPages } = props;

  return (
    <div className="d-flex justify-content-center align-items-center my-4">
      <button className="btn btn-secondary" onClick={previuosPageHandler} disabled={currentPage === 0 ? true : false}>
        {"<"}
      </button>
      <span className="mx-3">
        {LABELS.PAGE}&nbsp;{currentPage + 1}&nbsp;{LABELS.PAGE_SEPARATOR}&nbsp;{totalPages}
      </span>
      <button className="btn btn-secondary" onClick={nextPageHandler} disabled={currentPage + 1 >= totalPages ? true : false}>
        {">"}
      </button>
    </div>
  );
};

export default Navigation;
