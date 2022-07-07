import React, { FC, useContext, useRef } from "react";

import { TAGS } from "../common/Tags";
import ContextProps from "../interfaces/props/ContextProps";
import { AppContext } from "../services/Context";

const Dropdown: FC = (): JSX.Element => {
  const { tag, changeTag } = useContext(AppContext) as ContextProps;

  const ref = useRef<HTMLAnchorElement>(null);

  return (
    <>
      <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        {tag.toUpperCase()}&nbsp;
      </button>
      <ul className="dropdown-menu dropdown-menu-end">
        {Object.entries(TAGS).map(([key, value]) => (
          <li key={key} className="pointer">
            <a className={tag === value ? "active dropdown-item" : "dropdown-item"} ref={ref} onClick={() => changeTag(value)}>
              {value.toUpperCase()}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Dropdown;
