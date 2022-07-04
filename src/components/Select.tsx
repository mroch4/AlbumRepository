import React, { FC, ChangeEventHandler } from "react";

import { AppContext, AppContextType } from "../services/Context";

interface Select {
  value: string;
  onChangeEvent: ChangeEventHandler<HTMLSelectElement>;
}

const Select: FC<Select> = (props): JSX.Element => {
  const { labels } = React.useContext(AppContext) as AppContextType;

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
    <select className="form-select mt-2" value={props.value} onChange={props.onChangeEvent}>
      {Object.entries(SORTING_OPTIONS).map(([key, value]) => (
        <option key={key} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
};

export default Select;
