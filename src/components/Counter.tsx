import React, { FC } from "react";
import LABELS from "../common/Labels";

interface Count {
  count: number;
}

const Counter: FC<Count> = (props): JSX.Element => {
  return <h5>{LABELS.TOTAL.replace("##COUNT##", props.count.toString())}</h5>;
};

export default Counter;
