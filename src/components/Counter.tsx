import React, { FC } from "react";

import { ICounterProps } from "../interfaces/props/ICounterProps";
import { useAppContext } from "./Context";

const Counter: FC<ICounterProps> = (props): JSX.Element => {
  const { count } = props;

  const { labels } = useAppContext();

  return <h5>{count === 1 ? labels.TOTAL_ONE : labels.TOTAL.replace("##COUNT##", count.toString())}</h5>;
};

export default Counter;
