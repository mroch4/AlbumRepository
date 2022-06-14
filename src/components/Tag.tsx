import React, { FC } from "react";

interface SingleTag {
  tag: string;
}

const Tag: FC<SingleTag> = (props): JSX.Element => {
  return <span className="pill me-2">{props.tag}</span>;
};

export default Tag;
