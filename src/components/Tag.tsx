import React, { FC } from "react";

import { TagProps } from "../interfaces/props/TagsProps";

const Tag: FC<TagProps> = (props): JSX.Element => {
  const { tag } = props;

  return <span className="pill me-2">{tag}</span>;
};

export default Tag;
