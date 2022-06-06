interface Labels {
  ARTIST_ASCENDING: string;
  ARTIST_DESCENDING: string;
  SEARCHBYARTIST: string;
  SEARCHBYTITLE: string;
  SEARCHBYYEAR: string;
  SORTING: string;
  TAGS: string;
  TOTAL: string;
  TITLE_ASCENDING: string;
  TITLE_DESCENDING: string;
  YEAR_ASCENDING: string;
  YEAR_DESCENDING: string;
}

const LABELS: Labels = {
  ARTIST_ASCENDING: "Sortuj wg wykonawcy (rosnąco)",
  ARTIST_DESCENDING: "Sortuj wg wykonawcy (malejąco)",
  SEARCHBYARTIST: "Szukaj po wykonawcy albumu",
  SEARCHBYTITLE: "Szukaj po nazwie albumu",
  SEARCHBYYEAR: "Szukaj po roku wydania",
  SORTING: "Sortuj",
  TAGS: "Tagi",
  TOTAL: "W sumie albumów:",
  TITLE_ASCENDING: "Sortuj wg nazwy albumu (rosnąco)",
  TITLE_DESCENDING: "Sortuj wg nazwy albumu (malejąco)",
  YEAR_ASCENDING: "Sortuj wg roku wydania (rosnąco)",
  YEAR_DESCENDING: "Sortuj wg roku wydania (malejąco)",
};

// const LABELS: Labels = {
//   ARTIST_ASCENDING: "Artist name (A-Z)",
//   ARTIST_DESCENDING: "Artist name (Z-A)",
//   SEARCHBYARTIST: "Search by album artist",
//   SEARCHBYTITLE: "Search by album title",
//   SEARCHBYYEAR: "Search by release year",
//   SORTING: "Sort by",
//   TAGS: "Tags",
//   TOTAL: "Total amount:",
//   TITLE_ASCENDING: "Album title (A-Z)",
//   TITLE_DESCENDING: "Album title (Z-A)",
//   YEAR_ASCENDING: "Year published (x -> X)",
//   YEAR_DESCENDING: "Year published (X -> x)",
// };

export default LABELS;
