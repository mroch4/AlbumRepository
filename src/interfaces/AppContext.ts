import Album from "./Album";
import { LabelsValues } from "./Labels";

export type AppContextType = {
  albumsDatabase: Album[];
  lightTheme: boolean;
  changeTheme: (lightTheme: boolean) => void;
  countryCode: string;
  changeCountryCode: (countryCode: string) => void;
  labels: LabelsValues;
};

export default AppContextType;
