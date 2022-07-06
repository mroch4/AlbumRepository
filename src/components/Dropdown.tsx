import React, { FC, MouseEventHandler } from "react";

import { TAGS } from "../common/Tags";

interface TagDropdown {
  currentTag: string;
  onClickEvent: MouseEventHandler<HTMLAnchorElement>;
}

const Dropdown: FC<TagDropdown> = (props): JSX.Element => {
  const { currentTag } = props;

  // const handleOnClick = (e: MouseEvent<HTMLAnchorElement>) => {
  //   e.preventDefault();
  //   props.onClickEvent(e.currentTarget.value);
  // };

  //TODO - pass a anchor element innerHTML value to set currentTag
  const handleOnClick = () => {
    console.log("tag");
  };

  return (
    <>
      <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        {props.currentTag.toUpperCase()}&nbsp;
      </button>
      <ul className="dropdown-menu dropdown-menu-end">
        {Object.entries(TAGS).map(([key, value]) => (
          <li key={key} className="pointer">
            <a className={currentTag === value ? "active dropdown-item" : "dropdown-item"} onClick={handleOnClick}>
              {value.toUpperCase()}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Dropdown;
