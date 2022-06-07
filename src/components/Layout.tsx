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

const TopSection = (): JSX.Element => {
  const [query, setQuery] = useState("");
  const [albums, setAlbums] = useState(albumsDatabase);
  const [searchByArtist, setSearchByArtist] = useState(SETTINGS.SEARCHBYARTIST_ONLOAD);
  const [searchByTitle, setSearchByTitle] = useState(SETTINGS.SEARCHBYTITLE_ONLOAD);
  const [searchByYear, setSearchByYear] = useState(SETTINGS.SEARCHBYYEAR_ONLOAD);
  const [sortingOption, setSortingOption] = useState(SORTING_OPTIONS.YEAR_DESCENDING);
  const [currentPage, setCurrentPage] = useState(0);
  const [currentTag, setCurrentTag] = useState("none");

  useEffect(() => {
    setAlbums(() =>
      albumsDatabase
        .filter(
          (a: Album) =>
            (searchByArtist && a.artist.includes(query)) ||
            (searchByTitle && a.title.includes(query)) ||
            (searchByYear && a.year.toString().includes(query))
        )
        .filter((a: Album) => (currentTag === "none" ? a : a.tags?.includes(currentTag)))
        .sort((a: Album, b: Album): number => {
          switch (sortingOption) {
            case SORTING_OPTIONS.ARTIST_ASCENDING:
              if (a.artist < b.artist) return -1;
              if (a.artist > b.artist) return 1;
              return 0;
            case SORTING_OPTIONS.ARTIST_DESCENDING:
              if (a.artist > b.artist) return -1;
              if (a.artist < b.artist) return 1;
              return 0;
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

  const buttonClasses = "btn btn-secondary dropdown-toggle dropdown-toggle-split";
  const view = new Pagination(albums);
  const totalPages = view.getTotalPages();

  return (
    <>
      <div className="sticky-top">
        <div className="input-group">
          {/* TAG DROPDOWN */}
          <span className="btn btn-secondary">{LABELS.TAGS}</span>
          <button type="button" className={buttonClasses} data-bs-toggle="dropdown" aria-expanded="false">
            <span className="visually-hidden">Toggle Dropdown</span>
          </button>
          <ul className="dropdown-menu dropdown-menu-start">
            {Object.entries(TAGS).map(([key, value]) => (
              <li key={key}>
                <a className={currentTag === value ? "active dropdown-item" : "dropdown-item"} onClick={() => setCurrentTag(value)}>
                  {value}
                </a>
              </li>
            ))}
          </ul>
          {/* INPUT AREA */}
          <input type="text" className="form-control" value={query} onChange={(e) => setQuery(e.target.value)} />
          {query != "" ? <button type="button" className="btn-close" aria-label="Close" onClick={() => setQuery("")}></button> : null}
          {/* SORTING DROPDOWN */}
          <span className="btn btn-secondary">{LABELS.SORTING}</span>
          <button type="button" className={buttonClasses} data-bs-toggle="dropdown" aria-expanded="false">
            <span className="visually-hidden">Toggle Dropdown</span>
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            {Object.entries(SORTING_OPTIONS).map(([key, value]) => (
              <li key={key}>
                <a className={sortingOption === value ? "active dropdown-item" : "dropdown-item"} onClick={() => setSortingOption(value)}>
                  {value}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* CHECKBOX AREA */}
      <div className="my-3">
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
      ) : null}
    </>
  );
};

export default TopSection;
