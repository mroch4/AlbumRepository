import React, { FC } from "react";

import { AppContext, AppContextType } from "../services/Context";

interface Count {
  count: number;
}

const Counter: FC<Count> = (props): JSX.Element => {
  const { labels } = React.useContext(AppContext) as AppContextType;

  return <h5>{props.count === 1 ? labels.TOTAL_ONE : labels.TOTAL.replace("##COUNT##", props.count.toString())}</h5>;
};

export default Counter;
