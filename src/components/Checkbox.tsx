import React, { ChangeEventHandler, FC } from "react";

interface Checkbox {
  checked: boolean;
  onChangeEvent: ChangeEventHandler<HTMLInputElement>;
  label: string;
}

const Checkbox: FC<Checkbox> = (props): JSX.Element => {
  const { checked, onChangeEvent, label } = props;

  return (
    <div className="form-check">
      <label className="form-check-label">
        <input className="form-check-input" type="checkbox" checked={checked} onChange={onChangeEvent} />
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
