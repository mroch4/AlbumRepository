import React, { FC } from "react";

import { ITags } from "./interfaces/ITags";
import Tag from "./Tag";

const Tags: FC<ITags> = (props): JSX.Element => {
  const { tags } = props;

  return (
    <div className="d-flex flex-row">
      {tags?.map((tag) => (
        <Tag key={tag} tag={tag} />
      ))}
    </div>
  );
};

export default Tags;
