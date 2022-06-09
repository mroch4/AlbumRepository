import React, { FC } from "react";
import { Album } from "../common/Album";
import TagList from "./TagList";

const Card: FC<Album> = (album): JSX.Element => {
  const { artist, title, year, tags, coverUrl, spotifyUrl } = album;

  const spotifyLink = `https://open.spotify.com/album/${spotifyUrl}`;
  const imgSource = `covers/${coverUrl}.jpg`;
  const imgAlt = `Cover of ${title} by ${artist}`;

  return (
    <div className="card mt-3 p-2">
      <div className="d-flex flex-row">
        <div>
          {spotifyUrl ? (
            <a href={spotifyLink} className="pointer" target="_blank" rel="noreferrer">
              <img src={coverUrl ? imgSource : "covers/cover.png"} width={120} alt={imgAlt} />
            </a>
          ) : (
            <img src={coverUrl ? imgSource : "covers/cover.png"} width={120} alt={imgAlt} />
          )}
        </div>
        <div className="d-flex flex-column justify-content-between ms-2">
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
