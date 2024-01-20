import { useEffect, useState } from "react";
import PAGE_NAME from "../global/globals";
import { Navigate, useParams } from "react-router-dom";
import { getMovieById } from "../components/Card";
import isFav from "../utilities/isFav";
import Card from "../components/Card";
import { useSelector } from "react-redux";

function MoviePage() {
  const favs = useSelector((state) => state.favs.items);
  useEffect(() => {
    document.title = `${PAGE_NAME} - Detail`;
  }, []);

  const [movieData, setMovieData] = useState();

  const { id } = useParams();
  // console.log(id);

  useEffect(() => {
    getMovieById(id)
      .then((data) => {
        setMovieData(data);
      })
      .catch((err) => {
        alert(err);
      });
  }, [id]);

  return (
    <section>
      <div>
        {movieData && (
          <Navigate to={`/movie/${id}`} replace={true} />
          // <div>
          //   <Card
          //     movieData={movieData}
          //     // movieLink={false}
          //     // isFav={isFav(favs, null, movieData.id)}
          //   />
          //   test
          // </div>
        )}
      </div>
    </section>
  );
}

export default MoviePage;
