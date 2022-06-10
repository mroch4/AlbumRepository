import React, { ChangeEventHandler, FC } from "react";
import { SORTING_OPTIONS } from "../common/SortingOptions";

interface Select {
  value: string;
  onChangeEvent: ChangeEventHandler<HTMLSelectElement>;
}

const Select: FC<Select> = (props): JSX.Element => {
  const { value, onChangeEvent } = props;

  return (
    <select className="form-select mt-2" value={value} onChange={onChangeEvent}>
      {Object.entries(SORTING_OPTIONS).map(([key, value]) => (
        <option key={key} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
};

export default Select;
