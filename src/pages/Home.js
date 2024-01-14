import { useEffect } from "react";
import PAGE_NAME from "../global/globals";
import Movie from "../components/Movie";

const Home = () => {
  useEffect(() => {
    document.title = `${PAGE_NAME}-Home`;
  }, []);
  return (
    <div>
      <h1>Home</h1>
      <Movie />
    </div>
  );
};

export default Home;
