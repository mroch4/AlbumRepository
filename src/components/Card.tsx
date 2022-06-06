import React from "react";
import { Album } from "../common/Album";
import TagList from "./TagList";

const Card = (album: Album): JSX.Element => {
  const { artist, title, year, tags, coverUrl, spotifyUrl } = album;

  const spotifyLink = `https://open.spotify.com/album/${spotifyUrl}`;
  const imgSource = `covers/${coverUrl}.jpg`;
  const imgAlt = `Cover of ${title} by ${artist}`;

  return (
    <div className="card">
      <div className="d-flex flex-row">
        <div>
          <a href={spotifyLink} target="_blank" rel="noreferrer">
            <img src={coverUrl != null ? imgSource : "cover.png"} width={120} alt={imgAlt} />
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
