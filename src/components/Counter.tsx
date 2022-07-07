import React, { FC, useContext } from "react";

import AppContextType from "../interfaces/props/ContextProps";
import { CounterProps } from "../interfaces/props/CounterProps";
import { AppContext } from "../services/Context";

const Counter: FC<CounterProps> = (props): JSX.Element => {
  const { count } = props;

  const { labels } = useContext(AppContext) as AppContextType;

  return <h5>{count === 1 ? labels.TOTAL_ONE : labels.TOTAL.replace("##COUNT##", count.toString())}</h5>;
};

export default Counter;
