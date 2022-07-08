import React, { FC } from "react";

import { ITagsProps } from "../interfaces/props/ITagsProps";
import Tag from "./Tag";

const TagList: FC<ITagsProps> = (props): JSX.Element => {
  const { tags } = props;

  return (
    <div className="d-flex flex-row">
      {tags?.map((tag) => (
        <Tag key={tag} tag={tag} />
      ))}
    </div>
  );
};

export default TagList;
