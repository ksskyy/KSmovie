import { useEffect, useState } from "react";
import { PAGE_NAME } from "../global/globals";
import { useParams } from "react-router-dom";
import { getMovieById } from "../components/Card";
import isFav from "../utilities/isFav";
import Card from "../components/Card";
import { useSelector } from "react-redux";

function MoviePage() {
  // const favs = useSelector((state) => state.favs.items);
  useEffect(() => {
    document.title = `${PAGE_NAME} - Detail`;
  }, []);

  const { id } = useParams();
  const [movieData, setMovieData] = useState();

  useEffect(() => {
    getMovieById(id)
      .then((data) => {
        setMovieData(data);
      })
      .catch((err) => {
        alert(err);
      });
  }, [id]);

  return (
    <div>
      {movieData ? (
        <div>
          <h2>{movieData.title}</h2>
          <img
            src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
            alt={movieData.title}
          />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default MoviePage;
