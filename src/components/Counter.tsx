import React, { FC } from "react";
import LABELS from "../common/Labels";

interface Count {
  count: number;
}

const Counter: FC<Count> = ({ count }): JSX.Element => {
  return (
    <h4>
      {LABELS.TOTAL}&nbsp;{count}
    </h4>
  );
};

export default Counter;
