import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import { addFavMovie, deleteFavMovie } from "../features/favs/favsSlice";
import { useDispatch } from "react-redux";
import isFav from "../utilities/isFav";
import Requests, { fetchMovies } from "../Requests";

function Movie({ title, movieList }) {
  return (
    <section className="movies-container">
      <h2>{title}</h2>
      <div className="movie-list">
        {movieList.length === 0 ? (
          <div className="spinner"></div>
        ) : (
          movieList.map((movie) => (
            <Card key={movie.id} movie={movie} isFav={false} />
          ))
        )}
      </div>
    </section>
  );
}

export default Movie;
