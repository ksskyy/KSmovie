import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import { addFavMovie, deleteFavMovie } from "../features/favs/favsSlice";
import { useDispatch } from "react-redux";
import isFav from "../utilities/isFav";
import Requests from "../Requests";

function Movie() {
  const [movieList, setmovieList] = useState([]);

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

  return (
    <div className="movie-card">
      {movieList.length === 0 ? (
        <div className="spinner"></div>
      ) : (
        movieList.map((movie) => <Card key={movie.id} movie={movie} />)
      )}
    </div>
  );
}

export default Movie;
