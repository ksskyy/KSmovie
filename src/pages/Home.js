import { useEffect } from "react";
import PAGE_NAME from "../global/globals";
import Movie from "../components/Movie";
import Banner from "../components/Banner";
import Panel from "../components/Panel";

const Home = () => {
  useEffect(() => {
    document.title = `${PAGE_NAME}-Home`;
  }, []);
  return (
    <div>
      <Banner />
      <Panel />
    </div>
  );
};

export default Home;
