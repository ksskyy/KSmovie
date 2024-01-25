import { useEffect, useState, useRef } from "react";
import { PAGE_NAME } from "../global/globals";
import { useParams } from "react-router-dom";
import { getMovieById } from "../components/Card";
import YouTube from "react-youtube";
import Modal from "react-modal";
import Requests, { fetchMovies } from "../Requests";
import CircularProgressBar from "../components/CircularProgressBar";
import { FaRegPlayCircle } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";

import isFav from "../utilities/isFav";
import Card from "../components/Card";
import { useSelector } from "react-redux";
import { color } from "framer-motion";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.65)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "#282c34",
    padding: "1rem",
    border: "3px solid #ff9a04",
    width: "80%",
    maxWidth: "800px",
  },
};

function MoviePage() {
  // const favs = useSelector((state) => state.favs.items);
  useEffect(() => {
    document.title = `${PAGE_NAME} - Detail`;
  }, []);

  const { id } = useParams();
  const [movieData, setMovieData] = useState();
  const [movieVideoData, setMovieVideoData] = useState();
  const [movieCasts, setMovieCasts] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    getMovieById(id)
      .then((data) => {
        setMovieData(data);
        // console.log("Video data:", data.videos);
        // setMovieVideoData(data.videos || []);
        // console.log(data);
        if (data.id) {
          fetchMovies(Requests.fetchVideos(data.id))
            .then((videos) => {
              if (videos.results && videos.results.length > 0) {
                const videoData = videos.results[0]; // Assuming you want the first video
                setMovieVideoData(videoData);
              }
            })
            .catch((err) => {
              return err;
            });
        }
        if (data.id) {
          fetchMovies(Requests.fetchCasts(data.id)).then((casts) => {
            console.log("Casts Data:", casts);
            if (casts.cast && casts.cast.length > 0) {
              setMovieCasts(casts.cast);
              console.log("Casts Data cast:", casts.cast);
            }
          });
        }
      })
      .catch((err) => {
        return err;
      });
  }, [id]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
                <div className="genre-wrapper">
                  {movieData && <h2>{movieData.title}</h2>}
                  <span className="date">{movieData.release_date}</span>
                  <span className="runtime">{movieData.runtime} minutes</span>
                  <h3>Genres</h3>
                  <span className="genre">
                    {movieData.genres.map((genre) => (
                      <p key={genre.id}>{genre.name}</p>
                    ))}
                  </span>
                  <div>
                    <h3>Language</h3>
                    <span className="language">
                      {movieData.spoken_languages.map((languages) => (
                        <p key={languages.id}>{languages.name}</p>
                      ))}
                    </span>
                  </div>
                </div>
                <div>
                  <h3>Overview</h3>
                  <p>{movieData.overview}</p>
                </div>
              </div>
              <div className="movie-play">
                <div>
                  <FaRegPlayCircle
                    onClick={openModal}
                    className="play-button"
                  />
                </div>
                {/* <h3>User Score</h3> */}
                <div className="movie-vote">
                  <CircularProgressBar voteAverage={movieData.vote_average} />
                </div>
              </div>
            </div>
          </div>
          <div className="movie-casts">
            <h2>Top Casts</h2>
            {movieCasts && movieCasts.length > 0 ? (
              <ul ref={ref}>
                {movieCasts.slice(0, 12).map((cast) => {
                  // console.log("Cast ID:", cast.id);
                  return (
                    <li key={cast.id}>
                      {cast.profile_path && (
                        <img
                          src={`https://image.tmdb.org/t/p/w154/${cast.profile_path}`}
                          alt={cast.name}
                          className=""
                        />
                      )}
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p>No cast data available.</p>
            )}
          </div>
        </div>
      ) : (
        <div className="spinner"></div>
      )}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Video Modal"
      >
        {/* <button onClick={closeModal}>Close</button> */}
        <FaWindowClose onClick={closeModal} />
        {movieVideoData && (
          // <div style={customStyles.videoContainer}>
          // <YouTube videoId={movieVideoData.key} opts={opts} />
          // </div>
          <div className="video-container">
            <YouTube
              videoId={movieVideoData.key}
              opts={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        )}
      </Modal>
    </div>
  );
}

export default MoviePage;
