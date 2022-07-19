import React, { ChangeEvent, useEffect, useState } from "react";

import Checkbox from "./partials/_Checkbox";
import { Container } from "react-bootstrap";
import Counter from "./Counter";
import Dropdown from "./Dropdown";
import IAlbum from "../common/interfaces/IAlbum";
import { ICheckbox } from "./interfaces/ICheckbox";
import { IPagination } from "./interfaces/IPagination";
import { ISelect } from "./interfaces/ISelect";
import Info from "./Info";
import Input from "./Input";
import List from "./List";
import Loader from "./Loader";
import Navigation from "./Navigation";
import Pagination from "../services/Pagination";
import Select from "./Select";
import Spacer from "./Spacer";
import { useAppContext } from "../hooks/useAppContext";

const Layout = (): JSX.Element => {
  const { albumsDatabase, labels, query, tag } = useAppContext();

  const [dataLoaded, setDataLoaded] = useState(false);
  const [queriedData, setQueriedData] = useState(albumsDatabase);
  const [currentPage, setCurrentPage] = useState<number>(0);

  const [searchByArtist, setSearchByArtist] = useState<boolean>(true);
  const [searchByTitle, setSearchByTitle] = useState<boolean>(true);
  const [searchByYear, setSearchByYear] = useState<boolean>(true);
  const [sortingOption, setSortingOption] = useState<string>(labels.YEAR_DESCENDING);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDataLoaded(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setQueriedData(() =>
      albumsDatabase
        .filter(
          (a: IAlbum) =>
            (searchByArtist && a.artist.toLowerCase().includes(query.toLowerCase())) ||
            (searchByTitle && a.title.toLowerCase().includes(query.toLowerCase())) ||
            (searchByYear && a.year.toString().endsWith(query))
        )
        .filter((a: IAlbum) => (tag === "all" ? a : a.tags?.includes(tag)))
        .sort((a: IAlbum, b: IAlbum): number => {
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

  const artistCheckboxProps: ICheckbox = {
    checked: searchByArtist,
    onChangeEvent: () => setSearchByArtist(!searchByArtist),
    label: labels.SEARCHBYARTIST,
  };

  const titleCheckboxProps: ICheckbox = {
    checked: searchByTitle,
    onChangeEvent: () => setSearchByTitle(!searchByTitle),
    label: labels.SEARCHBYTITLE,
  };

  const yearCheckboxProps: ICheckbox = {
    checked: searchByYear,
    onChangeEvent: () => setSearchByYear(!searchByYear),
    label: labels.SEARCHBYYEAR,
  };

  const selectProps: ISelect = {
    value: sortingOption,
    onChangeEvent: (e: ChangeEvent<HTMLSelectElement>) => setSortingOption(e.currentTarget.value),
  };

  const view = new Pagination(queriedData);
  const totalPages = view.getTotalPages();
  const navProps: IPagination = {
    nextPageHandler: () => setCurrentPage(currentPage + 1),
    previuosPageHandler: () => setCurrentPage(currentPage - 1),
    currentPage: currentPage,
    totalPages: totalPages,
  };

  return (
    <Container className="mt-2">
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
          <Info />
          <List albums={view.getPage(currentPage)} />
          {totalPages > 1 ? <Navigation {...navProps}></Navigation> : <Spacer />}
        </>
      ) : (
        <Loader />
      )}
    </Container>
  );
};

export default Layout;
