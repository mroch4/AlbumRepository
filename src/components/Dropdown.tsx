import React, { FC, MouseEventHandler } from "react";
import { TAGS } from "../common/Tags";

interface TagDropdown {
  currentTag: string;
  onClickEvent: MouseEventHandler<HTMLAnchorElement>;
}

const Dropdown: FC<TagDropdown> = (props): JSX.Element => {
  const { currentTag, onClickEvent } = props;

  return (
    <>
      <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        {currentTag.toUpperCase()}&nbsp;
      </button>
      <ul className="dropdown-menu dropdown-menu-end">
        {Object.entries(TAGS).map(([key, value]) => (
          <li key={key} className="pointer">
            <a className={currentTag === value ? "active dropdown-item" : "dropdown-item"} onClick={onClickEvent}>
              {value.toUpperCase()}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Dropdown;
