import Card from "./Card";
import { addFavMovie, deleteFavMovie } from "../features/favs/favsSlice";
import { useDispatch, useSelector } from "react-redux";
import LogoLoading from "../components/LogoLoading";

const Movie = ({ title, movieList }) => {
  const dispatch = useDispatch();
  const favoriteMovies = useSelector((state) => state.favs.movies);
  return (
    <section className="movies-container">
      <h2>{title}</h2>
      <div className="movie-list">
        {movieList.length === 0 ? (
          <LogoLoading />
        ) : (
          movieList.map((movie) => {
            // console.log("Movie ID:", movie.id);
            // console.log("Favorite Movies:", favoriteMovies);
            return (
              <Card
                key={movie.id}
                movie={movie}
                isFav={favoriteMovies.some((fav) => fav.id === movie.id)}
                handleFavClick={(isFav, movieObj) => {
                  if (isFav) {
                    dispatch(addFavMovie(movieObj));
                  } else {
                    dispatch(deleteFavMovie(movieObj));
                  }
                }}
              />
            );
          })
        )}
      </div>
    </section>
  );
};

export default Movie;
