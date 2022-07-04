import React, { FC, ChangeEventHandler } from "react";

interface Checkbox {
  checked: boolean;
  onChangeEvent: ChangeEventHandler<HTMLInputElement>;
  label: string;
}

const Checkbox: FC<Checkbox> = (props): JSX.Element => {
  return (
    <div className="form-check">
      <label className="form-check-label">
        <input className="form-check-input" type="checkbox" checked={props.checked} onChange={props.onChangeEvent} />
        {props.label}
      </label>
    </div>
  );
};

export default Checkbox;
