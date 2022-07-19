import React, { FC } from "react";

import { ICheckbox } from "../interfaces/ICheckbox";

const Checkbox: FC<ICheckbox> = (props): JSX.Element => {
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
