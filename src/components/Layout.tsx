import React, { ChangeEvent, useEffect, useState } from "react";
import { Album } from "../common/Album";
import { albumsDatabase } from "../common/Database";
import LABELS from "../common/Labels";
import { Pagination } from "../common/Pagination";
import { SETTINGS } from "../common/Settings";
import { SORTING_OPTIONS } from "../common/SortingOptions";
import { TAGS } from "../common/Tags";
import Checkbox from "./Checkbox";
import Counter from "./Counter";
import Desc from "./Desc";
import Input from "./Input";
import List from "./List";
import Loader from "./Loader";
import Navigation from "./Navigation";
import Select from "./Select";
import Spacer from "./Spacer";

const Layout = (): JSX.Element => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [albums, setAlbums] = useState(albumsDatabase);
  const [query, setQuery] = useState("");
  const [currentTag, setCurrentTag] = useState("all");
  const [searchByArtist, setSearchByArtist] = useState(SETTINGS.SEARCHBYARTIST_ONLOAD);
  const [searchByTitle, setSearchByTitle] = useState(SETTINGS.SEARCHBYTITLE_ONLOAD);
  const [searchByYear, setSearchByYear] = useState(SETTINGS.SEARCHBYYEAR_ONLOAD);
  const [sortingOption, setSortingOption] = useState(SORTING_OPTIONS.RANDOM);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDataLoaded(true);
    }, SETTINGS.LOADING_TIMEOUT);
    return () => clearTimeout(timer);
  }, []);

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
            case SORTING_OPTIONS.RANDOM:
              return Math.random() - 0.5;
            default:
              return 0;
          }
        })
    );
    setCurrentPage(0);
  }, [query, searchByArtist, searchByTitle, searchByYear, sortingOption, currentTag]);

  const view = new Pagination(albums);
  const totalPages = view.getTotalPages();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="container mt-3">
      <div className="input-group">
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
      <Select value={sortingOption} onChangeEvent={(e: ChangeEvent<HTMLSelectElement>) => setSortingOption(e.currentTarget.value)} />
      <div className="my-2">
        <Checkbox checked={searchByArtist} onChangeEvent={() => setSearchByArtist(!searchByArtist)} label={LABELS.SEARCHBYARTIST} />
        <Checkbox checked={searchByTitle} onChangeEvent={() => setSearchByTitle(!searchByTitle)} label={LABELS.SEARCHBYTITLE} />
        <Checkbox checked={searchByYear} onChangeEvent={() => setSearchByYear(!searchByYear)} label={LABELS.SEARCHBYYEAR} />
      </div>

      {dataLoaded ? (
        <>
          <Counter count={albums.length} />
          <Desc tag={currentTag} />
          <List albums={view.getPage(currentPage)} />
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
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Layout;
