import { useEffect } from "react";
import PAGE_NAME from "../global/globals";
import { useSelector } from "react-redux";

const Favourite = () => {
  useEffect(() => {
    document.title = `${PAGE_NAME}-Favourite`;
  }, []);
  useSelector((state) => state.favs.movies);
  return (
    <main>
      <div className="favourite">
        <h1>Favourite</h1>
      </div>
    </main>
  );
};

export default Favourite;
