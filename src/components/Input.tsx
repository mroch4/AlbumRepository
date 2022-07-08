import React, { FC, useRef } from "react";

import { useAppContext } from "./Context";

const Input: FC = (): JSX.Element => {
  const { query, changeQuery } = useAppContext();

  const ref = useRef<HTMLInputElement>(null);

  return (
    <>
      <input type="text" className="form-control" value={query} ref={ref} onChange={() => changeQuery(ref.current?.value)} />
      {query !== "" ?? <button type="button" className="btn-close" aria-label="Close" onClick={() => changeQuery("")}></button>}
    </>
  );
};

export default Input;
