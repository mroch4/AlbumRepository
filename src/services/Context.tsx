import React, { FC, useEffect } from "react";

import { getAlbums } from "./Firebase";
import { ALBUMSDATABASE } from "../common/Database";
import LABELS from "../common/Labels";
import { SETTINGS } from "../common/Settings";
import Album from "../interfaces/Album";
import { LabelsValues } from "../interfaces/Labels";

export type AppContextType = {
  albumsDatabase: Album[];
  lightTheme: boolean;
  changeTheme: (lightTheme: boolean) => void;
  countryCode: string;
  changeCountryCode: (countryCode: string) => void;
  labels: LabelsValues;
};

export const AppContext = React.createContext<AppContextType | null>(null);

export interface ContextProps {
  children: React.ReactNode;
}

const ContextProvider: FC<ContextProps> = ({ children }) => {
  const [albumsDatabase] = React.useState<Album[]>(ALBUMSDATABASE);
  const [lightTheme, setThemeMode] = React.useState<boolean>(SETTINGS.LIGHT_THEME);
  const [countryCode, setCountryCode] = React.useState<string>(LABELS[SETTINGS.LANGUAGE].countryCode);
  const [labels, setLabels] = React.useState<LabelsValues>(LABELS[SETTINGS.LANGUAGE].values);

  useEffect(() => {
    getAlbums();
  }, []);

  useEffect(() => {
    // getAlbums();
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
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export default ContextProvider;
