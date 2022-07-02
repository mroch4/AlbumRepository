import React, { FC, useEffect } from "react";
import { getAlbums } from "./Firebase";
import { SETTINGS } from "../common/Settings";
import { Album } from "../common/Album";
import { ALBUMSDATABASE } from "../common/Database";

export type AppContextType = {
  albumsDatabase: Album[];
  lightTheme: boolean;
  changeTheme: (darkTheme: boolean) => void;
};

export const AppContext = React.createContext<AppContextType | null>(null);

export type ContextProps = {
  children: React.ReactNode;
};

const ContextProvider: FC<ContextProps> = ({ children }) => {
  const [albumsDatabase] = React.useState<Album[]>(ALBUMSDATABASE);
  const [lightTheme, setThemeMode] = React.useState<boolean>(SETTINGS.LIGHT_THEME);

  useEffect(() => {
    getAlbums();
  }, []);

  const contextValue = {
    albumsDatabase: albumsDatabase,
    lightTheme: lightTheme,
    changeTheme: setThemeMode,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export default ContextProvider;
