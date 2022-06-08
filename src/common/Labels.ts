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
  TOTAL: "Znaleziono ##COUNT## albumów",
  TITLE_ASCENDING: "Sortuj wg nazwy albumu (rosnąco)",
  TITLE_DESCENDING: "Sortuj wg nazwy albumu (malejąco)",
  YEAR_ASCENDING: "Sortuj wg roku wydania (rosnąco)",
  YEAR_DESCENDING: "Sortuj wg roku wydania (malejąco)",
};

// const LABELS: Labels = {
//   ARTIST_ASCENDING: "Sort by artist name (ascending)",
//   ARTIST_DESCENDING: "Sort by artist name (descending)",
//   SEARCHBYARTIST: "Search by album artist",
//   SEARCHBYTITLE: "Search by album title",
//   SEARCHBYYEAR: "Search by release year",
//   SORTING: "Sort by",
//   TAGS: "Tags",
//   TOTAL: "Total amount: ##COUNT## albums",
//   TITLE_ASCENDING: "Sort by album title (ascending)",
//   TITLE_DESCENDING: "Sort by album title (descending)",
//   YEAR_ASCENDING: "Sort by year published (ascending)",
//   YEAR_DESCENDING: "Sort by year published (descending)",
// };

export default LABELS;
