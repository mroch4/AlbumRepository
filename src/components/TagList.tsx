import React, { FC } from "react";

import Tag from "./Tag";
import { TagsProps } from "../interfaces/props/TagsProps";

const TagList: FC<TagsProps> = (props): JSX.Element => {
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
