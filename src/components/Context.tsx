import React, { FC, createContext, useContext, useEffect, useState } from "react";

import IAlbum from "../interfaces/IAlbum";
import IContextProps from "../interfaces/props/IContextProps";
import { IContextProviderProps } from "../interfaces/props/IContextProviderProps";
import { ILabelsValues } from "../interfaces/ILabels";
import LABELS from "../common/Labels";
import SETTINGS from "../common/Settings";
import { database } from "../common/Database";

const AppContext = createContext<IContextProps>(null);

export const useAppContext = () => {
  return useContext(AppContext);
};

const initial = {
  albumsDatabase: database,
  lightTheme: SETTINGS.LIGHT_THEME,
  countryCode: LABELS[SETTINGS.LANGUAGE].countryCode,
  labels: LABELS[SETTINGS.LANGUAGE].values,
  query: "",
  tag: "all",
};

const ContextProvider: FC<IContextProviderProps> = ({ children }) => {
  const [albumsDatabase] = useState<IAlbum[]>(initial.albumsDatabase);
  const [lightTheme, setThemeMode] = useState<boolean>(initial.lightTheme);
  const [countryCode, setCountryCode] = useState<string>(initial.countryCode);
  const [labels, setLabels] = useState<ILabelsValues>(initial.labels);
  const [query, setQuery] = useState<string>(initial.query);
  const [tag, setTag] = useState<string>(initial.tag);

  // useEffect(() => {
  //   getAlbums();
  // }, []);

  useEffect(() => {
    const languagePack = LABELS.find((set) => set.countryCode === countryCode)?.values;
    setLabels(languagePack);
  }, [countryCode]);

  const contextValue = {
    albumsDatabase: albumsDatabase,
    lightTheme: lightTheme,
    changeTheme: setThemeMode,
    countryCode: countryCode,
    changeCountryCode: setCountryCode,
    labels: labels,
    query: query,
    changeQuery: setQuery,
    tag: tag,
    changeTag: setTag,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export default ContextProvider;
