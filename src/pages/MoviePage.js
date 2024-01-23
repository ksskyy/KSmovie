import { useEffect, useState } from "react";
import { PAGE_NAME } from "../global/globals";
import { useParams } from "react-router-dom";
import { getMovieById } from "../components/Card";
import YouTube from "react-youtube";
import Requests, { fetchMovies } from "../Requests";
import CircularProgressBar from "../components/CircularProgressBar";

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
        // console.log("Video data:", data.videos);
        // setVideoMovieData(data.videos || []);
        console.log(data);
        if (data.id) {
          fetchMovies(Requests.fetchVideos(data.id))
            .then((videos) => {
              if (videos.results && videos.results.length > 0) {
                const videoData = videos.results[0]; // Assuming you want the first video
                setVideoMovieData(videoData);
              }
            })
            .catch((err) => {
              return err;
            });
        }
      })
      .catch((err) => {
        return err;
      });
  }, [id]);

  return (
    <div className="movie-page">
      <div
        className="movie-single-banner"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieData?.backdrop_path})`,
        }}
      >
        {movieData && <h1 className="movie-title">{movieData.title}</h1>}
      </div>
      {movieData ? (
        <div className="movie-intro">
          <div className="movie-info">
            <img
              src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
              alt={movieData.title}
              className="movie-poster"
            />
            <div>
              <div>
                <h2>Genres</h2>
                <ul className="genre">
                  {movieData.genres.map((genre) => (
                    <li key={genre.id}>{genre.name}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2>Overview</h2>
                <p>{movieData.overview}</p>
              </div>
              <div>
                <CircularProgressBar voteAverage={movieData.vote_average} />
              </div>
            </div>
          </div>
          <div className="movie-video">
            {movieVideoData ? (
              <YouTube videoId={movieVideoData.key} />
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
