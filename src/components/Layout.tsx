import React, { useState, useEffect, useContext, ChangeEvent } from "react";

import Checkbox from "./Checkbox";
import Counter from "./Counter";
import Desc from "./Desc";
import Dropdown from "./Dropdown";
import Input from "./Input";
import List from "./List";
import Loader from "./Loader";
import Navigation from "./Navigation";
import Select from "./Select";
import Spacer from "./Spacer";
import SETTINGS from "../common/Settings";
import Album from "../interfaces/Album";
import ContextProps from "../interfaces/props/ContextProps";
import { CheckboxProps } from "../interfaces/props/CheckboxProps";
import { PaginationProps } from "../interfaces/props/PaginationProps";
import { SelectProps } from "../interfaces/props/SelectProps";
import { AppContext } from "../services/Context";
import Pagination from "../services/Pagination";

const Layout = (): JSX.Element => {
  const { albumsDatabase, labels, query, tag } = useContext(AppContext) as ContextProps;

  const [dataLoaded, setDataLoaded] = useState(false);
  const [queriedData, setQueriedData] = useState(albumsDatabase);
  const [currentPage, setCurrentPage] = useState<number>(0);

  const [searchByArtist, setSearchByArtist] = useState<boolean>(SETTINGS.SEARCHBYARTIST_ONLOAD);
  const [searchByTitle, setSearchByTitle] = useState<boolean>(SETTINGS.SEARCHBYTITLE_ONLOAD);
  const [searchByYear, setSearchByYear] = useState<boolean>(SETTINGS.SEARCHBYYEAR_ONLOAD);
  const [sortingOption, setSortingOption] = useState<string>(labels.YEAR_DESCENDING);

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
        .filter((a: Album) => (tag === "all" ? a : a.tags?.includes(tag)))
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
  }, [query, searchByArtist, searchByTitle, searchByYear, sortingOption, tag]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const artistCheckboxProps: CheckboxProps = {
    checked: searchByArtist,
    onChangeEvent: () => setSearchByArtist(!searchByArtist),
    label: labels.SEARCHBYARTIST,
  };

  const titleCheckboxProps: CheckboxProps = {
    checked: searchByTitle,
    onChangeEvent: () => setSearchByTitle(!searchByTitle),
    label: labels.SEARCHBYTITLE,
  };

  const yearCheckboxProps: CheckboxProps = {
    checked: searchByYear,
    onChangeEvent: () => setSearchByYear(!searchByYear),
    label: labels.SEARCHBYYEAR,
  };

  const selectProps: SelectProps = {
    value: sortingOption,
    onChangeEvent: (e: ChangeEvent<HTMLSelectElement>) => setSortingOption(e.currentTarget.value),
  };

  const view = new Pagination(queriedData);
  const totalPages = view.getTotalPages();
  const navProps: PaginationProps = {
    nextPageHandler: () => setCurrentPage(currentPage + 1),
    previuosPageHandler: () => setCurrentPage(currentPage - 1),
    currentPage: currentPage,
    totalPages: totalPages,
  };

  return (
    <div className="container mt-2">
      <div className="input-group">
        <Dropdown />
        <Input />
      </div>
      <Select {...selectProps} />
      <div className="my-2">
        <Checkbox {...artistCheckboxProps} />
        <Checkbox {...titleCheckboxProps} />
        <Checkbox {...yearCheckboxProps} />
      </div>

      {dataLoaded ? (
        <>
          <Counter count={queriedData.length} />
          <Desc />
          <List albums={view.getPage(currentPage)} />
          {totalPages > 1 ? <Navigation {...navProps}></Navigation> : <Spacer />}
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Layout;
