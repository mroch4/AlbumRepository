import React, { FC } from "react";
import { SingleTag } from "../interfaces/SingleTag";

const Tag: FC<SingleTag> = ({ tag }): JSX.Element => {
  return <span className="pill">{tag}</span>;
};

export default Tag;
