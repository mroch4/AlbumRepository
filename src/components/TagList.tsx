import React from "react";
import { Album } from "../interfaces/Album";
import Tag from "./Tag";

function TagList(album: Album): JSX.Element {
  return (
    <div className="d-flex flex-row">
      {album.tags?.map((tag) => (
        <Tag key={tag} />
      ))}
    </div>
  );
}

export default TagList;
