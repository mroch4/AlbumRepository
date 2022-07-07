import React, { FC } from "react";

import { CheckboxProps } from "../interfaces/props/CheckboxProps";

const Checkbox: FC<CheckboxProps> = (props): JSX.Element => {
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
