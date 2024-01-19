import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
// import { addFavMovie, deleteFavMovie } from "../pages/MoviePage";
// import { useDispatch } from "react-redux";

function Movie() {
  // const dispatch = useDispatch();

  // function handleFavClick(addToFav, obj) {
  //   if (addToFav === true) {
  //     dispatch(addFavMovie(obj));
  //   } else {
  //     dispatch(deleteFavMovie(obj));
  //   }
  // }

  return (
    <div className="movies">
      {/* {isFav && (
        <div className="heart">
          <img src={`${imageFolderPath}heart.png`} alt="Heart" />
        </div>
      )} */}
      {<Card />}

      {/* <div className="movie-details">
        <div>
          <h4 className="movie-title">Movie Title</h4>
          <p className="rating">9</p>
        </div>
        <div className="overview">
          <h2>overview</h2>
          <p>details details</p>
        </div>
      </div> */}
    </div>
  );
}

export default Movie;
