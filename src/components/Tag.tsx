import React, { FC, useRef } from "react";

import { ITagProps } from "../interfaces/props/ITagsProps";
import { useAppContext } from "./Context";

const Tag: FC<ITagProps> = (props): JSX.Element => {
  const { tag } = props;

  const { changeTag } = useAppContext();

  const ref = useRef<HTMLSpanElement>(null);

  return (
    <span className="pill pointer" ref={ref} onClick={() => changeTag(ref.current?.innerText)}>
      {tag}
    </span>
  );
};

export default Tag;
