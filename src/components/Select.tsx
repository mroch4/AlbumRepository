import React, { FC } from "react";

import ContextProps from "../interfaces/props/ContextProps";
import { SelectProps } from "../interfaces/props/SelectProps";
import { AppContext } from "../services/Context";

const Select: FC<SelectProps> = (props): JSX.Element => {
  const { value, onChangeEvent } = props;

  const { labels } = React.useContext(AppContext) as ContextProps;

  const SORTING_OPTIONS = {
    ARTIST_ASCENDING: labels.ARTIST_ASCENDING,
    ARTIST_DESCENDING: labels.ARTIST_DESCENDING,
    TITLE_ASCENDING: labels.TITLE_ASCENDING,
    TITLE_DESCENDING: labels.TITLE_DESCENDING,
    YEAR_ASCENDING: labels.YEAR_ASCENDING,
    YEAR_DESCENDING: labels.YEAR_DESCENDING,
    RANDOM: labels.RANDOM,
  };

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