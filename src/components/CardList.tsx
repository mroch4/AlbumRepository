import React, { useEffect, useState } from "react";
import Card from "./Card";
import albumsDatabase from "../common/Database";
import SETTINGS from "../common/Settings";
import { Album } from "../interfaces/Album";

const List = (): JSX.Element => {
  const [query, setQuery] = useState("");
  const [array, setArray] = useState(albumsDatabase);
  const [searchByArtist, setSearchByArtist] = useState(SETTINGS.SEARCHBYARTIST_ONLOAD);
  const [searchByTitle, setSearchByTitle] = useState(SETTINGS.SEARCHBYTITLE_ONLOAD);
  const [searchByYear, setSearchByYear] = useState(SETTINGS.SEARCHBYYEAR_ONLOAD);
  const [sortingOption, setSortingOption] = useState(SETTINGS.SORTING_OPTIONS.ARTIST_ASCENDING);

  useEffect(() => {
    setArray(
      () =>
        albumsDatabase.filter(
          (a: Album) =>
            (searchByArtist && a.artist.includes(query)) ||
            (searchByTitle && a.title.includes(query)) ||
            (searchByYear && a.year.toString().includes(query))
        ).sort((a: Album, b: Album): number => b.year - a.year)
      // .sort((a: Album, b: Album): number => {
      //   switch (sortingOption) {
      //     case SETTINGS.SORTING_OPTIONS.ARTIST_ASCENDING:
      //       if (a.artist < b.artist) return -1;
      //       if (a.artist > b.artist) return 1;
      //       return 0;
      //     case SETTINGS.SORTING_OPTIONS.ARTIST_DESCENDING:
      //       if (a.artist > b.artist) return -1;
      //       if (a.artist < b.artist) return 1;
      //       return 0;
      //     case SETTINGS.SORTING_OPTIONS.TITLE_ASCENDING:
      //       if (a.title < b.title) return -1;
      //       if (a.title > b.title) return 1;
      //       return 0;
      //     case SETTINGS.SORTING_OPTIONS.TITLE_DESCENDING:
      //       if (a.title > b.title) return -1;
      //       if (a.title < b.title) return 1;
      //       return 0;
      //     case SETTINGS.SORTING_OPTIONS.YEAR_ASCENDING:
      //       return a.year - b.year;
      //     case SETTINGS.SORTING_OPTIONS.YEAR_DESCENDING:
      //       return b.year - a.year;
      //     default:
      //       return 0;
      //   }
      // })
    );
  }, [query, searchByArtist, searchByTitle, searchByYear, sortingOption]);

  return (
    <>
      {/* INPUT AREA */}
      <div className="input-group">
        <input type="text" className="form-control" onChange={(e) => setQuery(e.target.value)} />
        <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Sortuj
        </button>
        <ul className="dropdown-menu dropdown-menu-end">
          {Object.entries(SETTINGS.SORTING_OPTIONS).map(([key, value]) => (
            <li key={key}>
              <a className="dropdown-item" onClick={() => setSortingOption(key)}>
                {value}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* CHECKBOX AREA */}
      <div className="mt-3">
        <div className="form-check">
          <label className="form-check-label">
            <input className="form-check-input" type="checkbox" checked={searchByArtist} onChange={() => setSearchByArtist(!searchByArtist)} />
            {SETTINGS.LABELS.SEARCHBYARTIST}
          </label>
        </div>
        <div className="form-check">
          <label className="form-check-label">
            <input className="form-check-input" type="checkbox" checked={searchByTitle} onChange={() => setSearchByTitle(!searchByTitle)} />
            {SETTINGS.LABELS.SEARCHBYTITLE}
          </label>
        </div>
        <div className="form-check">
          <label className="form-check-label">
            <input className="form-check-input" type="checkbox" checked={searchByYear} onChange={() => setSearchByYear(!searchByYear)} />
            {SETTINGS.LABELS.SEARCHBYYEAR}
          </label>
        </div>
        {/* VIEW AREA */}
        {array.map((album) => (
          <Card key={album.id} {...album} />
        ))}
        {/* TODO: PAGINATION AREA */}
      </div>
    </>
  );
};

export default List;
