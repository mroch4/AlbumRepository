import React, { FC, useState, useEffect, createContext } from "react";

import { database } from "../common/Database";
import LABELS from "../common/Labels";
import SETTINGS from "../common/Settings";
import ContextProps from "../interfaces/props/ContextProps";
import { ContextProviderProps } from "../interfaces/props/ContextProviderProps";
import Album from "../interfaces/Album";
import { LabelsValues } from "../interfaces/Labels";

export const AppContext = createContext<ContextProps | null>(null);

const ContextProvider: FC<ContextProviderProps> = ({ children }) => {
  const [albumsDatabase] = useState<Album[]>(database);
  const [lightTheme, setThemeMode] = useState<boolean>(SETTINGS.LIGHT_THEME);
  const [countryCode, setCountryCode] = useState<string>(LABELS[SETTINGS.LANGUAGE].countryCode);
  const [labels, setLabels] = useState<LabelsValues>(LABELS[SETTINGS.LANGUAGE].values);
  const [query, setQuery] = useState<string>("");
  const [tag, setTag] = useState<string>("all");

  // useEffect(() => {
  //   getAlbums();
  // }, []);

  useEffect(() => {
    const languagePack = LABELS.find((set) => set.countryCode === countryCode)?.values;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    setLabels(languagePack!);
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
