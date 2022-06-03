import React from "react";
import { Album } from "../interfaces/Album";
import TagList from "./TagList";

const Card = (album: Album): JSX.Element => {
  const { artist, title, year, tags, coverUrl, spotifyUrl } = album;

  const imgSource = `covers/${coverUrl}.jpg`;
  const spotifyLink = `https://open.spotify.com/album/${spotifyUrl}`;

  return (
    <div className="card">
      <div className="d-flex flex-row">
        <div>
          <a href={spotifyLink} target="_blank" rel="noreferrer">
            <img src={imgSource} width={120} />
          </a>
        </div>
        <div className="album-data">
          <div>
            <div className="text-capitalize">{artist}</div>
            <div className="text-capitalize">{title}</div>
            <div>{year}</div>
          </div>
          {tags ? <TagList tags={tags} /> : null}
        </div>
      </div>
    </div>
  );
};

export default Card;
