import RatingStars from "./ratingStars";
import "../assets/image.webp";
import image from "../assets/image.webp";

const Movie = ({ title, poster_path, backdrop_path, release_date, vote_average }) => {
  const API_URL = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="grid">
      {poster_path ? <img src={API_URL + poster_path}></img> : <img src={image}></img>}
      <h3>{title}</h3>
      <h5 className="sub-year">{release_date && release_date.substring(0, 4)}</h5>
      <RatingStars value={vote_average} />
    </div>
  );
};

export default Movie;
