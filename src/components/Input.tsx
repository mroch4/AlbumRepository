import React, { FC, useContext, useRef } from "react";

import ContextProps from "../interfaces/props/ContextProps";
import { AppContext } from "../services/Context";

const Input: FC = (): JSX.Element => {
  const { query, changeQuery } = useContext(AppContext) as ContextProps;

  const ref = useRef<HTMLInputElement>(null);

  return (
    <>
      <input type="text" className="form-control" value={query} ref={ref} onChange={() => changeQuery(ref.current?.value)} />
      {query != "" ? <button type="button" className="btn-close" aria-label="Close" onClick={() => changeQuery("")}></button> : null}
    </>
  );
};

export default Input;
