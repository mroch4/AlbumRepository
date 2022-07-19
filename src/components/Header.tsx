import React, { FC } from "react";

import Checkbox from "./partials/_Checkbox";
import { ICheckbox } from "./interfaces/ICheckbox";
import { IContextProvider } from "../contexts/interfaces/IContextProvider";
import LABELS from "../labels/Labels";
import { useAppContext } from "../hooks/useAppContext";

const Header: FC<IContextProvider> = ({ children }) => {
  const { lightTheme, changeTheme, intl, changeIntl, labels, changeQuery, changeTag } = useAppContext();

  const isPL = intl === LABELS[0].intl;
  const handleLanguageChange = () => {
    if (isPL) {
      changeIntl(LABELS[1].intl);
    } else {
      changeIntl(LABELS[0].intl);
    }
  };

  const languageProps: ICheckbox = {
    checked: isPL,
    onChangeEvent: () => handleLanguageChange(),
    label: "English",
  };

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

  const themeProps: ICheckbox = {
    checked: lightTheme,
    onChangeEvent: () => handleThemeChange(),
    label: labels.LIGHT_THEME,
  };

  const handleLogoClick = () => {
    changeQuery("");
    changeTag("all");
  };

  return (
    <div>
      <div className="container topnav">
        <span className="logo pointer" onClick={handleLogoClick}>
          Albums Repository
        </span>
        <div className="form-check d-flex flex-column">
          <Checkbox {...languageProps} />
          <Checkbox {...themeProps} />
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
