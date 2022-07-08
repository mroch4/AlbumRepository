import IAlbum from "../IAlbum";
import { ILabelsValues } from "../ILabels";

export type IContextProps = {
  albumsDatabase: IAlbum[];
  lightTheme: boolean;
  changeTheme: (lightTheme: boolean) => void;
  countryCode: string;
  changeCountryCode: (countryCode: string) => void;
  labels: ILabelsValues;
  query: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  changeQuery: (query: any) => void;
  tag: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  changeTag: (query: any) => void;
};

export default IContextProps;
