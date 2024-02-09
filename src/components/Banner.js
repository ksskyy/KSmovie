import React, { useState, useEffect } from "react";
import Requests, { fetchMovies } from "../Requests";
import { useDispatch, useSelector } from "react-redux";
import { addFavMovie, deleteFavMovie } from "../features/favs/favsSlice";
import FavButton from "../components/FavButton";
import { motion } from "framer-motion";
import { truncate } from "../utilities/toolbelt";
import { Link } from "react-router-dom";

function Banner() {
  const [movie, setMovie] = useState([]);
  const [isFav, setIsFav] = useState(false);
  const [randomIndex, setRandomIndex] = useState();

  const dispatch = useDispatch();
  const favoriteMovies = useSelector((state) => state.favs.movies);

  const getBanner = () => {
    fetchMovies(Requests.fetchTrending)
      .then((data) => {
        // console.log(data.results);
        let randomIndexToUse;
        if (randomIndex === undefined) {
          const newRandomIndex = Math.floor(
            Math.random() * data.results.length
          );
          setRandomIndex(newRandomIndex);
          randomIndexToUse = newRandomIndex;
        } else {
          randomIndexToUse = randomIndex;
        }
        setMovie(data.results[randomIndexToUse]);
        // console.log(favoriteMovies);
        setIsFav(
          favoriteMovies.some(
            (favMovie) => favMovie.id === data.results[randomIndexToUse].id
          )
        );
      })
      .catch((err) => {
        return err;
      });
  };
  useEffect(() => {
    getBanner();
  }, [favoriteMovies]);

  function handleFavClick(addToFav, obj) {
    if (addToFav === true) {
      dispatch(addFavMovie(obj));
    } else {
      dispatch(deleteFavMovie(obj));
    }
  }

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
      }}
    >
      {movie && (
        <div className="banner-contents">
          <div className="banner-title">
            <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              whileTap={{ scale: 0.8 }}
              className="banner-heart"
            >
              <FavButton
                movieObj={movie}
                fav={isFav}
                handleFavClick={handleFavClick}
              />
            </motion.div>
          </div>
          <Link key={movie.id} to={`/movie/${movie.id}`} className="more-info">
            More Info
          </Link>

          {/* <button className="banner-button">
            <i class="fa-solid fa-circle-play"></i>
          </button> */}
          <p className="banner-description">{truncate(movie?.overview, 150)}</p>
        </div>
      )}
      <div className="banner-bottom"></div>
    </div>
  );
}

export default Banner;
