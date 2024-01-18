import { useEffect } from "react";
import PAGE_NAME from "../global/globals";
import { useParams } from "react-router-dom";

function SingleMoviePage() {
  useEffect(() => {
    document.title = `${PAGE_NAME} - Detail`;
  }, []);

  const { id } = useParams();

  useEffect(() => {
    console.log("id", id);
  }, [id]);

  return (
    <section>
      {!img && (
        <Navigate to={`/src/pages/MoviePage${movie.id}`} replace={true} />
      )}
      <h2>${movie.title}</h2>
      {img}
    </section>
  );
}

export default SingleMoviePage;
