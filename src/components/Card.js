import { useEffect, useState } from "react";
import { Link, json } from "react-router-dom";
import { API_KEY, TMDB_BASE_URL } from "../Requests";
import Requests from "../Requests";
import { motion } from "framer-motion";

function Card() {
  const [movieList, setmovieList] = useState();
  const getMovie = () => {
    fetch(Requests.fetchPopular)
      .then((res) => res.json())
      .then((json) => {
        console.log("JSON results:", json.results);
        setmovieList(json.results);
      });
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className="movie-card">
      {movieList ? (
        movieList.map((movie) => (
          <Link key={movie.id} to={`/src/pages/MoviePage${movie.id}`}>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </motion.div>
            <h4 className="movie-title">{movie.title}</h4>
            <p>{movie.vote_average}</p>
          </Link>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Card;
