import React, { FC } from "react";

import Tag from "./Tag";

interface Tags {
  tags: string[];
}

const TagList: FC<Tags> = (props): JSX.Element => {
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
