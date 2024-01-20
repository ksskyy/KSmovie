import { useEffect, useState } from "react";
import { Link, json, useNavigate } from "react-router-dom";
import { API_KEY, TMDB_BASE_URL } from "../Requests";
import Requests from "../Requests";
import { motion } from "framer-motion";
import { addFavMovie, deleteFavMovie } from "../features/favs/favsSlice";
import { useDispatch } from "react-redux";
import FavButton from "../components/FavButton";

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
function Card({ movieObj, isFav }) {
  const [movieList, setmovieList] = useState([]);

  // const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();

  const getMovie = () => {
    fetch(Requests.fetchPopular)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network was not OK.");
        }
        return res.json();
      })
      .catch((err) => {
        return err;
      })
      .then((json) => {
        console.log("JSON results:", json.results);
        setmovieList(json.results);
      });
  };

  useEffect(() => {
    getMovie();
  }, []);

  // function handleGetMovie(e) {
  //   e.preventDefault();
  //   setLoading(true);
  //   getMovie()
  //     .then((json) => {
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       setLoading(false);
  //     });
  // }

  const dispatch = useDispatch();

  function handleFavClick(addToFav, obj) {
    if (addToFav === true) {
      dispatch(addFavMovie(obj));
    } else {
      dispatch(deleteFavMovie(obj));
    }
  }
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <div className="movie-card">
      {isFav && (
        <FavButton movieObj={movieObj} handleFavClick={handleFavClick} />
      )}
      {movieList.length > 0 ? (
        movieList.map((movie) => (
          <div>
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
                    <h4>{movie.release_data}</h4>
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
                  movieObj={movieObj}
                  fav={true}
                  handleFavClick={handleFavClick}
                />
              ) : (
                <FavButton
                  movieObj={movieObj}
                  handleFavClick={handleFavClick}
                />
              )}
            </div>
          </div>
        ))
      ) : (
        <div className="spinner"></div>
        // <p>Loading...</p>
      )}
    </div>
  );
}
export { getMovieById };
export default Card;
