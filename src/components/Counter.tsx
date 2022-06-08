import React, { FC } from "react";
import LABELS from "../common/Labels";

interface Count {
  count: number;
}

const Counter: FC<Count> = ({ count }): JSX.Element => {
  return <h5>{LABELS.TOTAL.replace("##COUNT##", count.toString())}</h5>;
};

export default Counter;
