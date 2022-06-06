import React, { FC } from "react";

interface SingleTag {
  tag: string;
}

const Tag: FC<SingleTag> = ({ tag }): JSX.Element => {
  return <span className="pill">{tag}</span>;
};

export default Tag;
