import React from "react";
import AnimeCard from "../AnimeCard/AnimeCard";
import "./Main.scss";

const Main = (props) => {
  return (
    <main>
      <div className="main">
        <form className="search" onSubmit={props.handleSearch}>
          <input
            type="search"
            placeholder="search an anime..."
            required
            value={props.search}
            onChange={(e) => props.setSearch(e.target.value)}
          />
        </form>
      </div>
      <div className="anime-list">
        {props.animeList.map(anime => (
          <AnimeCard 
          anime={anime}
          key={anime.mal_id} />
        ))}
      </div>
    </main>
  );
};

export default Main;
