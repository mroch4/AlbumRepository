import React, { FC } from "react";
import { Album } from "../common/Album";
import Card from "./Card";

interface Albums {
  albums: Album[];
}

const CardList: FC<Albums> = ({ albums }): JSX.Element => {
  return (
    <>
      {albums.map((album: Album) => (
        <Card key={album.id} {...album} />
      ))}
    </>
  );
};

export default CardList;
