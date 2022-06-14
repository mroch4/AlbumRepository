import React, { FC } from "react";
import { Album } from "../common/Album";
import Card from "./Card";

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
