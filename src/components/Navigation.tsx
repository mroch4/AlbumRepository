import React, { FC, MouseEventHandler } from "react";

import { AppContext, AppContextType } from "../services/Context";

interface Pagination {
  nextPageHandler: MouseEventHandler;
  previuosPageHandler: MouseEventHandler;
  currentPage: number;
  totalPages: number;
}

const Navigation: FC<Pagination> = (props): JSX.Element => {
  const { lightTheme, labels } = React.useContext(AppContext) as AppContextType;

  const { nextPageHandler, previuosPageHandler, currentPage, totalPages } = props;

  return (
    <div className="d-flex justify-content-center align-items-center mt-4 pb-4">
      <button
        className={lightTheme ? "btn btn-secondary-outline" : "btn btn-dark"}
        onClick={previuosPageHandler}
        disabled={currentPage === 0 ? true : false}
      >
        {"<"}
      </button>
      <span className="mx-3">
        {labels.PAGE}&nbsp;{currentPage + 1}&nbsp;{labels.PAGE_SEPARATOR}&nbsp;{totalPages}
      </span>
      <button
        className={lightTheme ? "btn btn-secondary-outline" : "btn btn-dark"}
        onClick={nextPageHandler}
        disabled={currentPage + 1 >= totalPages ? true : false}
      >
        {">"}
      </button>
    </div>
  );
};

export default Navigation;
