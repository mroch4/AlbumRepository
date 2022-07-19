import React, { FC, useRef } from "react";

import { ICard } from "./interfaces/ICard";
import TagList from "./Tags";
import { useAppContext } from "../hooks/useAppContext";

const Card: FC<ICard> = (props): JSX.Element => {
  const { artist, title, year, tags, coverUrl, spotifyUrl } = props.album;

  const { changeQuery } = useAppContext();

  const artistRef = useRef<HTMLDivElement>(null);
  const yearRef = useRef<HTMLDivElement>(null);

  const spotifyLink = `https://open.spotify.com/album/${spotifyUrl}`;
  const imgSource = `covers/${coverUrl}.jpg`;
  const imgAlt = `Cover of ${title} by ${artist}`;

  return (
    <div className="card">
      <div className="d-flex flex-row">
        <div className="cover">
          <a href={spotifyLink} className={spotifyUrl ? "pointer" : "disabled"} target="_blank" rel="noreferrer">
            <img src={coverUrl ? imgSource : "covers/cover.png"} width="120" height="120" alt={imgAlt} loading="lazy" />
          </a>
        </div>
        <div className="info">
          <div>
            <div className="pointer" ref={artistRef} onClick={() => changeQuery(artistRef.current?.innerText)}>
              {artist}
            </div>
            <div>{title}</div>
            <div className="pointer" ref={yearRef} onClick={() => changeQuery(yearRef.current?.innerText)}>
              {year}
            </div>
          </div>
          {tags ? <TagList tags={tags} /> : null}
        </div>
      </div>
    </div>
  );
};

export default Card;
