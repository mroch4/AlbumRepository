import React, { FC } from "react";
import { Tags } from "../interfaces/Tags";
import Tag from "./Tag";

const TagList: FC<Tags> = ({ tags }): JSX.Element => {
  return (
    <div className="d-flex flex-row">
      {tags?.map((tag) => (
        <Tag key={tag} tag={tag} />
      ))}
    </div>
  );
};

export default TagList;
