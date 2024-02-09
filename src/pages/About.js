import { useEffect } from "react";
import { PAGE_NAME } from "../global/globals";

const About = () => {
  useEffect(() => {
    document.title = `${PAGE_NAME}-About`;
  }, []);
  return (
    <div className="about">
      <h1>ABOUT</h1>
      <div className="about-intro">
        <img
          src="/images/vecteezy_movie-film-banner-design-template-filmstrip-and-film_14376053.png"
          alt="cinematography poster"
        />
        <div>
          <h3>Welcome to KS(Kiss) Movie Database!</h3>
          <p>
            Your gateway to cinematic exploration! Dive into a world of movies,
            from classics to blockbusters, with personalized recommendations and
            a vibrant community. Start your cinematic journey today!
          </p>
          <p>
            Kaia's React JS project, KS Movie, is a testament to my passion for
            web development, where I thrive on crafting exceptional user
            experiences and tackling complex challenges head-on!
          </p>
        </div>
      </div>
      <div className="tmdb">
        <img
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
          alt="TMDB LOGO"
        ></img>
        <p>
          This product uses the TMDb API but is not endorsed or certified by
          TMDb.
        </p>
      </div>
    </div>
  );
};

export default About;
