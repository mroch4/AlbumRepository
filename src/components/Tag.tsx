import React, { FC } from "react";

interface SingleTag {
  tag: string;
}

const Tag: FC<SingleTag> = (props): JSX.Element => {
  const { tag } = props;

  return <span className="pill me-2">{tag}</span>;
};

export default Tag;
