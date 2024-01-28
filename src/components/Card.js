import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_KEY, TMDB_BASE_URL } from "../Requests";
import { motion } from "framer-motion";
import { addFavMovie, deleteFavMovie } from "../features/favs/favsSlice";
import { useDispatch } from "react-redux";
import FavButton from "../components/FavButton";
import { truncate } from "../utilities/toolbelt";
import CircularProgressBar from "../components/CircularProgressBar";

function getMovieById(movieId) {
  return fetch(`${TMDB_BASE_URL}/movie/${movieId}?api_key=${API_KEY}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network was not OK.");
      }
      return res.json();
    })
    .catch((err) => {
      throw err;
    });
}
function Card({ movie, isFav }) {
  const dispatch = useDispatch();

  function handleFavClick(addToFav, obj) {
    if (addToFav === true) {
      dispatch(addFavMovie(obj));
    } else {
      dispatch(deleteFavMovie(obj));
    }
  }
  if (!movie || !movie.id) {
    return null;
  }

  return (
    <div className="card">
      <motion.div
        className="card-details"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
            alt={movie?.title}
          />
        ) : (
          <div className="no-poster">No Poster Available</div>
        )}
        <div>
          <Link key={movie.id} to={`/movie/${movie.id}`}>
            <div className="movie-overview">
              <h4>OVERVIEW</h4>
              <h4>{movie?.release_date}</h4>
              <p>{truncate(movie?.overview, 80)}</p>
            </div>
          </Link>
        </div>
        <div className="vote-result">
          <CircularProgressBar voteAverage={movie.vote_average} />
        </div>
      </motion.div>
      <div>
        <h4 className="movies-title">{truncate(movie.title, 24)}</h4>
      </div>

      <motion.div
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        whileTap={{ scale: 0.8 }}
        className="heart"
      >
        <FavButton
          movieObj={movie}
          fav={isFav}
          handleFavClick={handleFavClick}
        />
      </motion.div>
    </div>
  );
}
export { getMovieById };
export default Card;
