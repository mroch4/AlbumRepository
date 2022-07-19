import React, { FC } from "react";

import { ICounter } from "./interfaces/ICounter";
import { useAppContext } from "../hooks/useAppContext";

const Counter: FC<ICounter> = (props): JSX.Element => {
  const { count } = props;

  const { labels } = useAppContext();

  return <h5>{count === 1 ? labels.TOTAL_ONE : labels.TOTAL.replace("##COUNT##", count.toString())}</h5>;
};

export default Counter;
