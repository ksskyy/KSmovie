import { useEffect, useState } from "react";

function Movie() {
  const [movieList, setmovieList] = useState();
  const getMovie = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=703b20f405340e709aa1ed5b46ca2b12"
    )
      .then((res) => res.json())
      .then((json) => setmovieList(json.results));
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className="movie-list">
      <div></div>
      {movieList ? (
        movieList.map((movie) => (
          <img
            key={movie.id}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Movie;
