import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Banner.css";
import Requests from "../Requests";

function Banner() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(Requests.fetchTrending);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        if (data.results && data.results.length > 0) {
          const randomIndex = Math.floor(Math.random() * data.results.length);
          setMovie(data.results[randomIndex]);
        } else {
          console.error("No results found in the API response.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
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
          <h1 className="banner-title">
            {movie?.title || movie?.name || movie?.original_name}
            <button className="banner-heart">
              <i class="fa-solid fa-heart-circle-plus"></i>
            </button>
          </h1>
          <button className="more-info">More Info</button>
          <button className="banner-button">
            <i class="fa-solid fa-circle-play"></i>
          </button>
          {/* <FontAwesomeIcon icon="fa-solid fa-circle-play" /> */}
          <p className="banner-description">{truncate(movie?.overview, 150)}</p>
        </div>
      )}
      <div className="banner-bottom"></div>
    </div>
  );
}

export default Banner;
