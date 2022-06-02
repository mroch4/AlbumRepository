import React from "react";
import { Album } from "../interfaces/Album";
import TagList from "./TagList";

function Card(album: Album): JSX.Element {
  const { artist, title, year, tags } = album;

  return (
    <div className="card">
      <div className="d-flex flex-row">
        <div>
          <img className="me-2" src="cover.png" width={120} />
        </div>
        <div className="d-flex flex-column justify-content-between">
          <div>
            <div className="text-capitalize">{artist}</div>
            <div className="text-capitalize">{title}</div>
            <div>{year}</div>
          </div>
          {tags ? <TagList {...album} /> : null}
        </div>
      </div>
    </div>
  );
}

export default Card;
