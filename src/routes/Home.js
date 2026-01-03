import React, { useState, useEffect } from "react";
import Movie from "../components/movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const url = "https://yts.lt/api/v2/list_movies.json?rating=9&sort_by=year";
  const getMovies = async () => {
    const json = await (await fetch(url)).json(); // fetch(url).then(response => response.json());
    setMovies(json.data.movies);
    setLoading(false);
  };

  // Render후 한번만 실행하고 싶은 코드가 있다면 useEffect사용
  // 단 2번째 매개인자를 비워둬서 아무 것도 watch하지 않도록 하면 된다.
  useEffect(() => {
    getMovies();
  }, []); // 두 번째 매개인자의 빈 배열은 아무 것도 지켜보고 있지 않다는 뜻
  console.log(movies);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        movies.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            coverImg={movie.medium_cover_image}
            title={movie.title}
            rating={movie.rating}
            genres={movie.genres}
          />
        ))
      )}
    </div>
  );
}

export default Home;
