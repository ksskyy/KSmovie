import { useEffect, useState } from "react";
import { Link, json, useNavigate } from "react-router-dom";
import { API_KEY, TMDB_BASE_URL } from "../Requests";
import Requests from "../Requests";
import { motion } from "framer-motion";
import { addFavMovie, deleteFavMovie } from "../features/favs/favsSlice";
import { useDispatch } from "react-redux";
import FavButton from "../components/FavButton";
import { truncate } from "../utilities/toolbelt";

function getMovieById(movieId) {
  fetch(Requests.fetchPopular)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network was not OK.");
      }
      return res.json();
    })
    .catch((err) => {
      return err;
    });
  // .then((json) => {
  //   // console.log("JSON results:", json.results.id);
  //   setMovieData(json.results.id);
  // });
}
function Card({ movie, isFav }) {
  // const [movieList, setmovieList] = useState([]);

  // const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();

  const dispatch = useDispatch();

  function handleFavClick(addToFav, obj) {
    if (addToFav === true) {
      dispatch(addFavMovie(obj));
    } else {
      dispatch(deleteFavMovie(obj));
    }
  }

  return (
    <div className="card">
      {isFav && <FavButton movieObj={movie} handleFavClick={handleFavClick} />}

      <motion.div
        className="card-details"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div>
          <Link key={movie.id} to={`/movie/${movie.id}`}>
            <div className="movie-overview">
              <h4>OVERVIEW</h4>
              <h4>{movie.release_date}</h4>
              <p>{truncate(movie?.overview, 80)}</p>
              <button>MORE</button>
            </div>
          </Link>
        </div>
      </motion.div>
      <div className="movie-info">
        <h4 className="movie-title">{movie.title}</h4>
        <p>{movie.vote_average}</p>
      </div>
      <div className="btn-favourite">
        {isFav ? (
          <FavButton
            movieObj={movie}
            fav={true}
            handleFavClick={handleFavClick}
          />
        ) : (
          <FavButton movieObj={movie} handleFavClick={handleFavClick} />
        )}
      </div>
    </div>
  );
}
export { getMovieById };
export default Card;
