import React, { ChangeEvent, MouseEventHandler, useEffect, useState } from "react";
import { Album } from "../common/Album";
import { albumsDatabase } from "../common/Database";
import LABELS from "../common/Labels";
import { Pagination } from "../common/Pagination";
import { SETTINGS } from "../common/Settings";
import { SORTING_OPTIONS } from "../common/SortingOptions";
import { TAGS } from "../common/Tags";
import Checkbox from "./Checkbox";
import Counter from "./Counter";
import Dropdown from "./Dropdown";
import Input from "./Input";
import List from "./List";
import Navigation from "./Navigation";
import Select from "./Select";
import Spacer from "./Spacer";

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
            (searchByYear && a.year.toString().endsWith(query))
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
      {/* INPUT */}
      <div className="input-group">
        {/* <Dropdown currentTag={currentTag} onClickEvent={(e: MouseEventHandler<HTMLAnchorElement>) => setCurrentTag(e)} /> */}
        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          {currentTag.toUpperCase()}&nbsp;
        </button>
        <ul className="dropdown-menu dropdown-menu-start">
          {Object.entries(TAGS).map(([key, value]) => (
            <li key={key} className="pointer">
              <a className={currentTag === value ? "active dropdown-item" : "dropdown-item"} onClick={() => setCurrentTag(value)}>
                {value.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>
        <Input
          query={query}
          onChangeEvent={(e: ChangeEvent<HTMLInputElement>) => setQuery(e.currentTarget.value)}
          onClickEvent={() => setQuery("")}
        />
      </div>

      {/* SORTING */}
      <Select value={sortingOption} onChangeEvent={(e: ChangeEvent<HTMLSelectElement>) => setSortingOption(e.currentTarget.value)} />

      {/* CHECKBOXES */}
      <div className="my-2">
        <Checkbox checked={searchByArtist} onChangeEvent={() => setSearchByArtist(!searchByArtist)} label={LABELS.SEARCHBYARTIST} />
        <Checkbox checked={searchByTitle} onChangeEvent={() => setSearchByTitle(!searchByTitle)} label={LABELS.SEARCHBYTITLE} />
        <Checkbox checked={searchByYear} onChangeEvent={() => setSearchByYear(!searchByYear)} label={LABELS.SEARCHBYYEAR} />
      </div>

      {/* COUNTER */}
      <Counter count={albums.length} />

      {/* VIEW */}
      <List albums={view.getPage(currentPage)} />

      {/* NAVIGATION */}
      {totalPages > 1 ? (
        <Navigation
          nextPageHandler={() => setCurrentPage(currentPage + 1)}
          previuosPageHandler={() => setCurrentPage(currentPage - 1)}
          currentPage={currentPage}
          totalPages={totalPages}
        ></Navigation>
      ) : (
        <Spacer />
      )}
    </>
  );
};

export default Layout;
