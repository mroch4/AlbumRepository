import React, { useEffect, useState } from "react";
import { albumsDatabase } from "../common/Database";
import LABELS from "../common/Labels";
import { SETTINGS } from "../common/Settings";
import { TAGS } from "../common/Tags";
import { SORTING_OPTIONS } from "../common/SortingOptions";
import { Album } from "../common/Album";
import { Pagination } from "../common/Pagination";
import CardList from "./CardList";
import Counter from "./Counter";
import Navigation from "./Navigation";

const Layout = (): JSX.Element => {
  const [query, setQuery] = useState("");
  const [albums, setAlbums] = useState(albumsDatabase);
  const [searchByArtist, setSearchByArtist] = useState(SETTINGS.SEARCHBYARTIST_ONLOAD);
  const [searchByTitle, setSearchByTitle] = useState(SETTINGS.SEARCHBYTITLE_ONLOAD);
  const [searchByYear, setSearchByYear] = useState(SETTINGS.SEARCHBYYEAR_ONLOAD);
  const [sortingOption, setSortingOption] = useState(SORTING_OPTIONS.YEAR_ASCENDING);
  const [currentPage, setCurrentPage] = useState(0);
  const [currentTag, setCurrentTag] = useState("all");

  useEffect(() => {
    setAlbums(() =>
      albumsDatabase
        .filter(
          (a: Album) =>
            (searchByArtist && a.artist.toLowerCase().includes(query.toLowerCase())) ||
            (searchByTitle && a.title.toLowerCase().includes(query.toLowerCase())) ||
            (searchByYear && a.year.toString().includes(query))
        )
        .filter((a: Album) => (currentTag === "all" ? a : a.tags?.includes(currentTag)))
        .sort((a: Album, b: Album): number => {
          switch (sortingOption) {
            case SORTING_OPTIONS.ARTIST_ASCENDING:
              if (a.artist < b.artist) return -1;
              if (a.artist > b.artist) return 1;
              return a.year - b.year;
            case SORTING_OPTIONS.ARTIST_DESCENDING:
              if (a.artist > b.artist) return -1;
              if (a.artist < b.artist) return 1;
              return b.year - a.year;
            case SORTING_OPTIONS.TITLE_ASCENDING:
              if (a.title < b.title) return -1;
              if (a.title > b.title) return 1;
              return 0;
            case SORTING_OPTIONS.TITLE_DESCENDING:
              if (a.title > b.title) return -1;
              if (a.title < b.title) return 1;
              return 0;
            case SORTING_OPTIONS.YEAR_ASCENDING:
              return a.year - b.year;
            case SORTING_OPTIONS.YEAR_DESCENDING:
              return b.year - a.year;
            default:
              return 0;
          }
        })
    );
    setCurrentPage(0);
  }, [query, searchByArtist, searchByTitle, searchByYear, sortingOption, currentTag]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const view = new Pagination(albums);
  const totalPages = view.getTotalPages();

  return (
    <>
      <div className="input-group">
        {/* INPUT AREA */}
        <input type="text" className="form-control" value={query} onChange={(e) => setQuery(e.target.value)} />
        {query != "" ? <button type="button" className="btn-close" aria-label="Close" onClick={() => setQuery("")}></button> : null}
        {/* TAG DROPDOWN */}
        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          {currentTag.toUpperCase()}&nbsp;
        </button>
        <ul className="dropdown-menu dropdown-menu-end">
          {Object.entries(TAGS).map(([key, value]) => (
            <li key={key} className="pointer">
              <a className={currentTag === value ? "active dropdown-item" : "dropdown-item"} onClick={() => setCurrentTag(value)}>
                {value.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* SORTING SELECT */}
      <select className="form-select mt-2" value={sortingOption} onChange={(e) => setSortingOption(e.target.value)}>
        {Object.entries(SORTING_OPTIONS).map(([key, value]) => (
          <option key={key} value={value}>
            {value}
          </option>
        ))}
      </select>
      {/* CHECKBOX AREA */}
      <div className="my-2">
        <div className="form-check">
          <label className="form-check-label">
            <input className="form-check-input" type="checkbox" checked={searchByArtist} onChange={() => setSearchByArtist(!searchByArtist)} />
            {LABELS.SEARCHBYARTIST}
          </label>
        </div>
        <div className="form-check">
          <label className="form-check-label">
            <input className="form-check-input" type="checkbox" checked={searchByTitle} onChange={() => setSearchByTitle(!searchByTitle)} />
            {LABELS.SEARCHBYTITLE}
          </label>
        </div>
        <div className="form-check">
          <label className="form-check-label">
            <input className="form-check-input" type="checkbox" checked={searchByYear} onChange={() => setSearchByYear(!searchByYear)} />
            {LABELS.SEARCHBYYEAR}
          </label>
        </div>
      </div>

      {/* VIEW AREA */}
      <Counter count={albums.length} />
      <CardList albums={view.getPage(currentPage)} />

      {/* PAGINATION AREA */}
      {totalPages > 1 ? (
        <Navigation
          nextPageHandler={() => setCurrentPage(currentPage + 1)}
          previuosPageHandler={() => setCurrentPage(currentPage - 1)}
          currentPage={currentPage}
          totalPages={totalPages}
        ></Navigation>
      ) : (
        <div className="spacer"></div>
      )}
    </>
  );
};

export default Layout;
