import React, { useState } from "react";
import Card from "./Card";
import albumsDatabase from "../common/Database";
import SETTINGS from "../common/Settings";

function List(): JSX.Element {
  const [query, setQuery] = useState("");
  const [searchByArtist, setSearchByArtist] = useState(SETTINGS.SEARCHBYARTIST_ONLOAD);
  const [searchByTitle, setSearchByTitle] = useState(SETTINGS.SEARCHBYTITLE_ONLOAD);
  const [searchByYear, setSearchByYear] = useState(SETTINGS.SEARCHBYYEAR_ONLOAD);

  const collection = albumsDatabase.filter(
    (album) =>
      (searchByArtist && album.artist.includes(query)) ||
      (searchByTitle && album.title.includes(query)) ||
      (searchByYear && album.year.toString().includes(query))
  );

  return (
    <>
      <div className="input-group">
        <input type="text" className="form-control" onChange={(e) => setQuery(e.target.value)} />
      </div>
      <div className="mt-3">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={searchByArtist}
            onChange={() => setSearchByArtist(!searchByArtist)}
          />
          <label className="form-check-label">{SETTINGS.LABELS.SEARCHBYARTIST}</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={searchByTitle}
            onChange={() => setSearchByTitle(!searchByTitle)}
          />
          <label className="form-check-label">{SETTINGS.LABELS.SEARCHBYTITLE}</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={searchByYear}
            onChange={() => setSearchByYear(!searchByYear)}
          />
          <label className="form-check-label">{SETTINGS.LABELS.SEARCHBYYEAR}</label>
        </div>
        {collection.map((album) => (
          <Card key={album.id} {...album} />
        ))}
      </div>
    </>
  );
}

export default List;
