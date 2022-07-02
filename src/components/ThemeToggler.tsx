import React, { FC } from "react";
import LABELS from "../common/Labels";
import { AppContext, AppContextType, ContextProps } from "../services/Context";

const ThemeToggler: FC<ContextProps> = ({ children }) => {
  const { lightTheme, changeTheme } = React.useContext(AppContext) as AppContextType;

  const handleThemeChange = () => {
    changeTheme(!lightTheme);
  };

  return (
    <div data-theme={lightTheme ? "light" : "dark"}>
      <div className="container d-flex justify-content-end pt-2">
        <div className="form-check">
          <label className="form-check-label">
            <input className="form-check-input" type="checkbox" checked={lightTheme} onChange={handleThemeChange} />
            {LABELS.TOOGLE_THEME}
          </label>
        </div>
      </div>
      {children}
    </div>
  );
};

export default ThemeToggler;
