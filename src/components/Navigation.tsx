import React, { FC } from "react";

import { IPaginationProps } from "../interfaces/props/IPaginationProps";
import { useAppContext } from "./Context";

const Navigation: FC<IPaginationProps> = (props): JSX.Element => {
  const { nextPageHandler, previuosPageHandler, currentPage, totalPages } = props;

  const { lightTheme, labels } = useAppContext();

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
