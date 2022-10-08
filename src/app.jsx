import { useEffect, useState } from "react";
import "./app.css";
import Movie from "./components/movie";
const App = (props) => {
  // api-key: d6866347004024bc39bc7fb806cdd83f
  const [movieData, setMovieData] = useState([]);
  const [query, setQuery] = useState("");

  const API_URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=d6866347004024bc39bc7fb806cdd83f";

  const FetchData = async () => {
    fetch(API_URL)
      .then((data) => data.json())
      .then((res) => setMovieData(res.results));
  };

  useEffect(() => {
    FetchData();
    console.log(movieData);
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    searchMovie();
  };
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const searchMovie = () => {
    if (query) {
      const SEARCH = `https://api.themoviedb.org/3/search/movie?api_key=d6866347004024bc39bc7fb806cdd83f&adult=true&query=${query}`;
      fetch(SEARCH)
        .then((data) => data.json())
        .then((res) => setMovieData(res.results))
        .catch((error) => console.log(error));
      setQuery("");
    }
  };

  return (
    <>
      <div className="intro">
        <h3 className="movie-title">MOVIE</h3>
        <div className="input-search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="i-search"
            viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
          <form onSubmit={handleSubmit}>
            <input
              value={query}
              onChange={handleChange}
              placeholder=" Search for Movies..."></input>
          </form>
        </div>
      </div>
      <h2 className="category">Popular</h2>
      <div className="movies-grid">
        {movieData.map((mov) => (
          <Movie key={mov.id} {...mov} />
        ))}
      </div>
    </>
  );
};

export default App;
