import { useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [animeList, setAnimeList] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [search, setSearch] = useState("");

  const getTopAnime = async () => {
    const response = await fetch("https://api.jikan.moe/v4/top/anime").then(
      (res) => res.json()
    );

    setTopAnime(response.data.slice(0, 10));
  };

  const handleSearch = (e) => {
    e.preventDefault();

    // console.log(search);
    fetchAnime(search);
  };

  const fetchAnime = async (query) => {
    const temp = await fetch(
      `https://api.jikan.moe/v4/anime?q=${query}&sfw&limit=10`
    ).then((res) => res.json());

    // console.log(temp.data);
    setAnimeList(temp.data);
  };

  useEffect(() => {
    getTopAnime();
  }, []);

  // console.log("topAnime", topAnime);
  return (
    <div className="App">
      <Header />
      <div className="display">
        <Sidebar topAnime={topAnime} />
        <Main
          handleSearch={handleSearch}
          search={search}
          setSearch={setSearch}
          animeList={animeList}
        />
      </div>
    </div>
  );
}

export default App;
