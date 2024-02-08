import { useEffect } from "react";
import { PAGE_NAME } from "../global/globals";

const About = () => {
  useEffect(() => {
    document.title = `${PAGE_NAME}-About`;
  }, []);
  return (
    <div className="about">
      <h1>ABOUT</h1>
      <h3>Welcome to KS Movie Database!</h3>
      <p>
        Your gateway to cinematic exploration! Dive into a world of movies, from
        classics to blockbusters, with personalized recommendations and a
        vibrant community. Start your cinematic journey today!
      </p>
      <p>
        MVDB is a React JS project proudly created by Kaia. I am a web developer
        who love coding, designing best user experience, and challenging!
      </p>
      <div className="TMDB">
        <img href="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"></img>
        <p>
          This product uses the TMDb API but is not endorsed or certified by
          TMDb.
        </p>
      </div>
    </div>
  );
};

export default About;
