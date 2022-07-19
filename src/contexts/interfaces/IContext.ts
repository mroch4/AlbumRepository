import IAlbum from "../../common/interfaces/IAlbum";
import { ILabels } from "../../labels/interfaces/ILabels";

export type IContext = {
  albumsDatabase: IAlbum[];
  lightTheme: boolean;
  changeTheme: (lightTheme: boolean) => void;
  intl: string;
  changeIntl: (countryCode: string) => void;
  labels: ILabels;
  query: string;
  changeQuery: (query: any) => void;
  tag: string;
  changeTag: (query: any) => void;
};

export default IContext;
