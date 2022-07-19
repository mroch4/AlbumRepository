import React, { FC, useRef } from "react";

import { ITag } from "./interfaces/ITag";
import { useAppContext } from "../hooks/useAppContext";

const Tag: FC<ITag> = (props): JSX.Element => {
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
