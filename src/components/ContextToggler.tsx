import React, { FC, useContext } from "react";

import LABELS from "../common/Labels";
import ContextProps from "../interfaces/props/ContextProps";
import { ContextProviderProps } from "../interfaces/props/ContextProviderProps";
import { AppContext } from "../services/Context";

const ContextToggler: FC<ContextProviderProps> = ({ children }) => {
  const { lightTheme, changeTheme, countryCode, changeCountryCode, labels, changeQuery } = useContext(AppContext) as ContextProps;

  const handleThemeChange = () => {
    changeTheme(!lightTheme);
    if (lightTheme) {
      document.body.style.setProperty("--font-color", "#efefef");
      document.body.style.setProperty("--background-color", "#090909");
      document.body.style.setProperty("--card-color", "#313131");
      document.body.style.setProperty("--pill-color", "#090909");
    } else {
      document.body.style.setProperty("--font-color", "black");
      document.body.style.setProperty("--background-color", "#fafafa");
      document.body.style.setProperty("--card-color", "white");
      document.body.style.setProperty("--pill-color", "gainsboro");
    }
  };

  const isPL = countryCode === LABELS[0].countryCode;
  const handleLanguageChange = () => {
    if (isPL) {
      changeCountryCode(LABELS[1].countryCode);
    } else {
      changeCountryCode(LABELS[0].countryCode);
    }
  };

  return (
    <div>
      <div className="container topnav">
        <span className="logo pointer" onClick={() => changeQuery("")}>
          Albums Repository
        </span>
        <div className="form-check d-flex flex-column">
          <label className="form-check-label">
            <input className="form-check-input" type="checkbox" checked={isPL} onChange={handleLanguageChange} />
            English
          </label>
          <label className="form-check-label">
            <input className="form-check-input" type="checkbox" checked={lightTheme} onChange={handleThemeChange} />
            {labels.LIGHT_THEME}
          </label>
        </div>
      </div>
      {children}
    </div>
  );
};

export default ContextToggler;