import React, { FC, ChangeEventHandler, MouseEventHandler } from "react";

interface Input {
  query: string;
  onChangeEvent: ChangeEventHandler<HTMLInputElement>;
  onClickEvent: MouseEventHandler<HTMLButtonElement>;
}

const Input: FC<Input> = (props): JSX.Element => {
  return (
    <>
      <input type="text" className="form-control" value={props.query} onChange={props.onChangeEvent} />
      {props.query != "" ? <button type="button" className="btn-close" aria-label="Close" onClick={props.onClickEvent}></button> : null}
    </>
  );
};

export default Input;
