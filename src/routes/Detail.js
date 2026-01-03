import { useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/movie-detail";
import { useState } from "react";
import "../css/movie-detail.css";

function Detail() {
  const { id } = useParams(); // useParams를 통해서 :id를 받아옴
  const [movie, setMovie] = useState(null);
  console.log(id);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.lt/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    console.log(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {movie === null ? <h1>Loading...</h1> : <MovieDetail json={movie} />}
    </div>
  );
}

export default Detail;
