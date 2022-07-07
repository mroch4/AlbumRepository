import React, { FC, useContext } from "react";

import ContextProps from "../interfaces/props/ContextProps";
import { PaginationProps } from "../interfaces/props/PaginationProps";
import { AppContext } from "../services/Context";

const Navigation: FC<PaginationProps> = (props): JSX.Element => {
  const { nextPageHandler, previuosPageHandler, currentPage, totalPages } = props;

  const { lightTheme, labels } = useContext(AppContext) as ContextProps;

  return (
    <div className="pagination">
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
