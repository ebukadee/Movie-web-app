import { useEffect, useState } from "react";
import "./app.css";
import Movie from "./components/movie";
import RatingStars from "./components/ratingStars";
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
  }, []);
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
  // <input
  // className="input-text"
  // onChange={handleChange}
  // value={query}
  // placeholder=" Search for Movies..."></input>

  return (
    <>
      <div className="intro">
        <h3 className="movie-title">MOVIE</h3>
        <div className="input-search">
          <input></input>
          <button className="input-button" onClick={searchMovie}>
            Submit
          </button>
        </div>
      </div>
      <h2 className="category">Popular</h2>
      <div className="movies-grid">
        {movieData.map((mov) => (
          <Movie key={mov.id} {...mov} />
        ))}
      </div>
      <RatingStars />
    </>
  );
};

export default App;
