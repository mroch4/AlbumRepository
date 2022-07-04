import React, { FC } from "react";

import Card from "./Card";
import Album from "../interfaces/Album";

interface Albums {
  albums: Album[];
}

const List: FC<Albums> = (props): JSX.Element => {
  return (
    <>
      {props.albums.map((album: Album) => (
        <Card key={album.id} {...album} />
      ))}
    </>
  );
};

export default List;
