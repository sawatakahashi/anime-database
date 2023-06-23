import React from "react";
import "./Sidebar.scss";

const Sidebar = ({topAnime}) => {
  return (
    <aside className="sidebar">
      <nav>
        <h3>Best Anime Top 10</h3>
        {topAnime.map(anime=>(
          <a 
          href={anime.url}
          target="_blank"
          rel="noreferrer">
            {anime.title}
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
