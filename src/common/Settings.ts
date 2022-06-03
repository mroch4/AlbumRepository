import { Settings } from "./../interfaces/Settings";

const SETTINGS: Settings = {
  SEARCHBYARTIST_ONLOAD: true,
  SEARCHBYTITLE_ONLOAD: true,
  SEARCHBYYEAR_ONLOAD: true,
  SORTING_OPTIONS: {
    ARTIST_ASCENDING: "Sortuj wg wykonawcy (rosnąco)",
    ARTIST_DESCENDING: "Sortuj wg wykonawcy (malejąco)",
    TITLE_ASCENDING: "Sortuj wg nazwy albumu (rosnąco)",
    TITLE_DESCENDING: "Sortuj wg nazwy albumu (malejąco)",
    YEAR_ASCENDING: "Sortuj wg roku wydania (rosnąco)",
    YEAR_DESCENDING: "Sortuj wg roku wydania (malejąco)",
  },
  LABELS: {
    SEARCHBYARTIST: "Szukaj po wykonawcy albumu",
    SEARCHBYTITLE: "Szukaj po nazwie albumu",
    SEARCHBYYEAR: "Szukaj po roku wydania",
    SORTING: "Sortuj",
  },
};

// const SETTINGS: Settings = {
//   SEARCHBYARTIST_ONLOAD: false,
//   SEARCHBYTITLE_ONLOAD: false,
//   SEARCHBYYEAR_ONLOAD: true,
//   SORTING_OPTIONS: {
//     ARTIST_ASCENDING: "Artist name (A-Z)",
//     ARTIST_DESCENDING: "Artist name (Z-A)",
//     TITLE_ASCENDING: "Album title (A-Z)",
//     TITLE_DESCENDING: "Album title (Z-A)",
//     YEAR_ASCENDING: "Year published (x -> X)",
//     YEAR_DESCENDING: "Year published (X -> x)",
//   },
//   LABELS: {
//     SEARCHBYARTIST: "Search by album artist",
//     SEARCHBYTITLE: "Search by album title",
//     SEARCHBYYEAR: "Search by release year",
//     SORTING: "Sort by",
//   },
// };

export default SETTINGS;
