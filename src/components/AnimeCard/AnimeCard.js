import React from "react";
import "./AnimeCard.scss";

const AnimeCard = ({ anime }) => {

    console.log(anime.images.jpg.image_url)
  return (
    <article>
      <a href={anime.url} target="_blank" rel="noreferrer">
        <figure>
          <img src={anime.images.jpg.image_url} alt="anime" />
        </figure>
        <h3>{anime.title}</h3>
      </a>
    </article>
  );
};

export default AnimeCard;
