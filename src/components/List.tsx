import React, { FC } from "react";

import Card from "./Card";
import IAlbum from "../interfaces/IAlbum";
import { IListProps } from "../interfaces/props/IListProps";

const List: FC<IListProps> = (props): JSX.Element => {
  const { albums } = props;

  return (
    <>
      {albums.map((album: IAlbum) => (
        <Card key={album.id} album={album} />
      ))}
    </>
  );
};

export default List;
