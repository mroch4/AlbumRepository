import Album from "../Album";
import { LabelsValues } from "../Labels";

export type ContextProps = {
  albumsDatabase: Album[];
  lightTheme: boolean;
  changeTheme: (lightTheme: boolean) => void;
  countryCode: string;
  changeCountryCode: (countryCode: string) => void;
  labels: LabelsValues;
  query: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  changeQuery: (query: any) => void;
  tag: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  changeTag: (query: any) => void;
};

export default ContextProps;
