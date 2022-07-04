import React, { ChangeEvent, useEffect, useState } from "react";

import Checkbox from "./Checkbox";
import Counter from "./Counter";
import Desc from "./Desc";
import Input from "./Input";
import List from "./List";
import Loader from "./Loader";
import Navigation from "./Navigation";
import Select from "./Select";
import { SETTINGS } from "../common/Settings";
import { TAGS } from "../common/Tags";
import Album from "../interfaces/Album";
import Pagination from "../services/Pagination";

import { AppContext, AppContextType } from "../services/Context";
import Spacer from "./Spacer";

const Layout = (): JSX.Element => {
  const { albumsDatabase, labels } = React.useContext(AppContext) as AppContextType;
  const [queriedData, setQueriedData] = useState(albumsDatabase);
  const [dataLoaded, setDataLoaded] = useState(false);

  const [query, setQuery] = useState("");
  const [currentTag, setCurrentTag] = useState("all");
  const [searchByArtist, setSearchByArtist] = useState(SETTINGS.SEARCHBYARTIST_ONLOAD);
  const [searchByTitle, setSearchByTitle] = useState(SETTINGS.SEARCHBYTITLE_ONLOAD);
  const [searchByYear, setSearchByYear] = useState(SETTINGS.SEARCHBYYEAR_ONLOAD);
  const [sortingOption, setSortingOption] = useState(labels.YEAR_DESCENDING);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDataLoaded(true);
    }, SETTINGS.LOADING_TIMEOUT);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setQueriedData(() =>
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
            case labels.ARTIST_ASCENDING:
              if (a.artist < b.artist) return -1;
              if (a.artist > b.artist) return 1;
              return a.year - b.year;
            case labels.ARTIST_DESCENDING:
              if (a.artist > b.artist) return -1;
              if (a.artist < b.artist) return 1;
              return b.year - a.year;
            case labels.TITLE_ASCENDING:
              if (a.title < b.title) return -1;
              if (a.title > b.title) return 1;
              return 0;
            case labels.TITLE_DESCENDING:
              if (a.title > b.title) return -1;
              if (a.title < b.title) return 1;
              return 0;
            case labels.YEAR_ASCENDING:
              return a.year - b.year;
            case labels.YEAR_DESCENDING:
              return b.year - a.year;
            case labels.RANDOM:
              return Math.random() - 0.5;
            default:
              return 0;
          }
        })
    );
    setCurrentPage(0);
  }, [query, searchByArtist, searchByTitle, searchByYear, sortingOption, currentTag]);

  const view = new Pagination(queriedData);
  const totalPages = view.getTotalPages();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="container mt-2">
      <div className="input-group">
        {/* <Dropdown currentTag={currentTag} onClickEvent={(e) => setCurrentTag(e.target.value)} /> */}
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
        <Checkbox checked={searchByArtist} onChangeEvent={() => setSearchByArtist(!searchByArtist)} label={labels.SEARCHBYARTIST} />
        <Checkbox checked={searchByTitle} onChangeEvent={() => setSearchByTitle(!searchByTitle)} label={labels.SEARCHBYTITLE} />
        <Checkbox checked={searchByYear} onChangeEvent={() => setSearchByYear(!searchByYear)} label={labels.SEARCHBYYEAR} />
      </div>

      {dataLoaded ? (
        <>
          <Counter count={queriedData.length} />
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
