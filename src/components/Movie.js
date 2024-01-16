import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

function Movie() {
  return (
    <div className="movie-list">
      <div className="posters">{/* <Card /> */}</div>

      <div className="movie-details">
        <div>
          <h4 className="movie-title">Movie Title</h4>
          <p className="rating">9</p>
        </div>
        <div className="overview">
          <h2>overview</h2>
          <p>details details</p>
        </div>
      </div>
    </div>
  );
}

export default Movie;
