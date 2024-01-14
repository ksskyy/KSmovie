import { useEffect } from "react";
import PAGE_NAME from "../global/globals";

const Home = () => {
  useEffect(() => {
    document.title = `${PAGE_NAME}-Home`;
  }, []);
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
