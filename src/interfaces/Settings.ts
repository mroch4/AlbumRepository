export interface Settings {
  SEARCHBYARTIST_ONLOAD: boolean;
  SEARCHBYTITLE_ONLOAD: boolean;
  SEARCHBYYEAR_ONLOAD: boolean;
  SORTING_OPTIONS: {
    ARTIST_ASCENDING: string;
    ARTIST_DESCENDING: string;
    TITLE_ASCENDING: string;
    TITLE_DESCENDING: string;
    YEAR_ASCENDING: string;
    YEAR_DESCENDING: string;
  };
  LABELS: {
    SEARCHBYARTIST: string;
    SEARCHBYTITLE: string;
    SEARCHBYYEAR: string;
    SORTING: string;
  };
}
