import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../css/movie.css";

function Movie({ id, coverImg, title, rating, genres }) {
  return (
    <div className="movie-card">
      <img className="movie-poster" src={coverImg} alt={title} />
      <h2 className="movie-title">
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <div className="movie-info">
        <p className="movie-rating">Rating: {rating}</p>
        <ul className="movie-genres">
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie; // Movie 라는 변수를 이 파일의 기본 값으로 내보냄
