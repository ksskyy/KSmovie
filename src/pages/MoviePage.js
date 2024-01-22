import { useEffect, useState } from "react";
import { PAGE_NAME } from "../global/globals";
import { useParams } from "react-router-dom";
import { getMovieById } from "../components/Card";
import { Player } from "video-react";
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
  const [movieVideoData, setVideoMovieData] = useState();

  useEffect(() => {
    getMovieById(id)
      .then((data) => {
        setMovieData(data);
        console.log("Video data:", data.videos);
        // setVideoMovieData(data.videos || []);
        console.log(data);
      })
      .catch((err) => {
        alert(err);
      });
  }, [id]);

  return (
    <div>
      {movieData ? (
        <div>
          <h1>{movieData.title}</h1>
          <img
            src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
            alt={movieData.title}
          />
          <div>
            <h2>Genres</h2>
            <ul>
              {movieData.genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </div>
          <div className="movie-video">
            {movieVideoData ? (
              <div>
                <Player>
                  <source src="movieVideoData[0]?.key" />
                </Player>
              </div>
            ) : (
              <div className="spinner"></div>
            )}
          </div>
        </div>
      ) : (
        <div className="spinner"></div>
      )}
    </div>
  );
}

export default MoviePage;
