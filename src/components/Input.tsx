import React, { ChangeEventHandler, FC, MouseEventHandler } from "react";

interface Input {
  query: string;
  onChangeEvent: ChangeEventHandler<HTMLInputElement>;
  onClickEvent: MouseEventHandler<HTMLButtonElement>;
}

const Input: FC<Input> = (props): JSX.Element => {
  const { query, onChangeEvent, onClickEvent } = props;

  return (
    <>
      <input type="text" className="form-control" value={query} onChange={onChangeEvent} />
      {query != "" ? <button type="button" className="btn-close" aria-label="Close" onClick={onClickEvent}></button> : null}
    </>
  );
};

export default Input;
