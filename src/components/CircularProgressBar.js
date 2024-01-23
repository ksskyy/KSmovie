import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularProgressBar = ({ voteAverage }) => {
  const normalizedVoteAverage = (voteAverage / 10) * 100;

  return (
    <CircularProgressbar
      value={normalizedVoteAverage}
      text={`${Math.round(voteAverage * 10)}%`}
      background
      backgroundPadding={6}
      styles={buildStyles({
        backgroundColor: "#282c3495",
        textColor: "#fff",
        pathColor: "#ff9a04",
        trailColor: "transparent",
      })}
    />
  );
};

export default CircularProgressBar;
