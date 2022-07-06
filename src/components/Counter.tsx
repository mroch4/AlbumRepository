import React, { FC } from "react";

import AppContextType from "../interfaces/AppContext";
import { AppContext } from "../services/Context";

interface Count {
  count: number;
}

const Counter: FC<Count> = (props): JSX.Element => {
  const { count } = props;
  const { labels } = React.useContext(AppContext) as AppContextType;

  return <h5>{count === 1 ? labels.TOTAL_ONE : labels.TOTAL.replace("##COUNT##", count.toString())}</h5>;
};

export default Counter;
