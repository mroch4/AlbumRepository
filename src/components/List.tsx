import React, { FC } from "react";

import Card from "./Card";
import IAlbum from "../common/interfaces/IAlbum";
import { IList } from "./interfaces/IList";

const List: FC<IList> = (props): JSX.Element => {
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
