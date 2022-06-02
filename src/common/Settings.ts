import { Settings } from "./../interfaces/Settings";

const SETTINGS: Settings = {
  SEARCHBYARTIST_ONLOAD: true,
  SEARCHBYTITLE_ONLOAD: true,
  SEARCHBYYEAR_ONLOAD: true,
  LABELS: {
    SEARCHBYARTIST: "Szukaj po wykonawcy albumu",
    SEARCHBYTITLE: "Szukaj po nazwie albumu",
    SEARCHBYYEAR: "Szukaj po roku wydania",
  },
};

// const SETTINGS: Settings = {
//   SEARCHBYARTIST_ONLOAD: false,
//   SEARCHBYTITLE_ONLOAD: false,
//   SEARCHBYYEAR_ONLOAD: true,
//   LABELS: {
//     SEARCHBYARTIST: "Search by album artist",
//     SEARCHBYTITLE: "Search by album title",
//     SEARCHBYYEAR: "Search by release year",
//   },
// };

export default SETTINGS;
