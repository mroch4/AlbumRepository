import React, { FC, createContext, useEffect, useState } from "react";

import IAlbum from "../common/interfaces/IAlbum";
import IContext from "./interfaces/IContext";
import { IContextProvider } from "./interfaces/IContextProvider";
import { ILabels } from "../labels/interfaces/ILabels";
import LABELS from "../labels/Labels";
import { database } from "../common/Database";
import { getLabelsPack } from "../helpers/getLabelsPack";

export const AppContext = createContext<IContext>(null);

const initialIntl = "pl-PL";

const initial = {
  albumsDatabase: database,
  lightTheme: false,
  intl: initialIntl,
  labels: getLabelsPack(initialIntl),
  query: "",
  tag: "all",
};

const ContextProvider: FC<IContextProvider> = ({ children }) => {
  const [albumsDatabase] = useState<IAlbum[]>(initial.albumsDatabase);
  const [lightTheme, setThemeMode] = useState<boolean>(initial.lightTheme);
  const [countryCode, setCountryCode] = useState<string>(initial.intl);
  const [labels, setLabels] = useState<ILabels>(initial.labels);
  const [query, setQuery] = useState<string>(initial.query);
  const [tag, setTag] = useState<string>(initial.tag);

  // useEffect(() => {
  //   getAlbums();
  // }, []);

  useEffect(() => {
    const languagePack = LABELS.find((set) => set.intl === countryCode).labels;
    setLabels(languagePack);
  }, [countryCode]);

  const contextValue = {
    albumsDatabase: albumsDatabase,
    lightTheme: lightTheme,
    changeTheme: setThemeMode,
    intl: countryCode,
    changeIntl: setCountryCode,
    labels: labels,
    query: query,
    changeQuery: setQuery,
    tag: tag,
    changeTag: setTag,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export default ContextProvider;
