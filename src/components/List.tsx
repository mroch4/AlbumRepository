import React, { FC } from "react";

import Card from "./Card";
import Album from "../interfaces/Album";
import { ListProps } from "../interfaces/props/ListProps";

const List: FC<ListProps> = (props): JSX.Element => {
  const { albums } = props;

  return (
    <>
      {albums.map((album: Album) => (
        <Card key={album.id} album={album} />
      ))}
    </>
  );
};

export default List;
