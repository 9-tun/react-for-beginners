import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../css/movie.css";

function MovieDetail({ json }) {
  return (
    <div className="movie-detail">
      <img
        className="movie-detail-img"
        src={json.medium_cover_image}
        alt={json.title}
      />
      <div className="movie-detail-info">
        <h2>{json.title}</h2>
        <p className="movie-detail-back">
          <Link to="/">뒤로가기</Link>
        </p>
        <p>year: {json.year}</p>
        <p>Rating: {json.rating}</p>
        <p>Run Time: {json.runtime}</p>
        <p>Language: {json.language}</p>
        <p>Summary: {json.summary}</p>
        <ul>
          {json.genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

MovieDetail.propTypes = {
  json: PropTypes.object,
};

export default MovieDetail; // Movie 라는 변수를 이 파일의 기본 값으로 내보냄
