import React, { FC } from "react";
import { Album } from "../common/Album";
import TagList from "./TagList";

const Card: FC<Album> = (props): JSX.Element => {
  const { artist, title, year, tags, coverUrl, spotifyUrl } = props;

  const spotifyLink = `https://open.spotify.com/album/${spotifyUrl}`;
  const imgSource = `covers/${coverUrl}.jpg`;
  const imgAlt = `Cover of ${title} by ${artist}`;

  return (
    <div className="card mt-3 p-2">
      <div className="d-flex flex-row">
        <div className="cover">
          <a href={spotifyLink} className={spotifyUrl ? "pointer" : "disabled"} target="_blank" rel="noreferrer">
            <img src={coverUrl ? imgSource : "covers/cover.png"} width="120" height="120" alt={imgAlt} loading="lazy" />
          </a>
        </div>
        <div className="info">
          <div>
            <div>{artist}</div>
            <div>{title}</div>
            <div>{year}</div>
          </div>
          {tags ? <TagList tags={tags} /> : null}
        </div>
      </div>
    </div>
  );
};

export default Card;
