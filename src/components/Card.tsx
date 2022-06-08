import React from "react";
import { Album } from "../common/Album";
import TagList from "./TagList";

const Card = (album: Album): JSX.Element => {
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
        <div className="album-data ms-2">
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
