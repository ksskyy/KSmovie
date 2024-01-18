import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_KEY, TMDB_BASE_URL } from "../Requests";
import Requests from "../Requests";
import { motion } from "framer-motion";
import { addFavMovie, deleteFavMovie } from "../pages/MoviePage";
import { useDispatch } from "react-redux";

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

  const dispatch = useDispatch();

  function handleFavClick(addToFav, obj) {
    if (addToFav === true) {
      dispatch(addFavMovie(obj));
    } else {
      dispatch(deleteFavMovie(obj));
    }
  }

  return (
    <div className="movie-card">
      {isFav && (
        <div className="heart">
          <img src={`${imageFolderPath}heart.png`} alt="Heart" />
        </div>
      )}
      {movieList ? (
        movieList.map((movie) => (
          <Link key={movie.id} to={`/src/pages/MoviePage${movie.id}`}>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </motion.div>
            <div className="movie-info">
              <h4 className="movie-title">{movie.title}</h4>
              <p>{movie.vote_average}</p>
            </div>
            <div className="btn-favourite">
              {isFav ? (
                <FavButton
                  kittenObj={kittenObj}
                  remove={true}
                  handleFavClick={handleFavClick}
                />
              ) : (
                <FavButton
                  kittenObj={kittenObj}
                  handleFavClick={handleFavClick}
                />
              )}
            </div>
          </Link>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Card;
