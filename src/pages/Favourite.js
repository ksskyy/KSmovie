import { useEffect } from "react";
import { PAGE_NAME } from "../global/globals";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";
import { addFavMovie, deleteFavMovie } from "../features/favs/favsSlice";

const Favourite = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = `${PAGE_NAME}-Favourite`;
  }, []);

  const favourites = useSelector((state) => state.favs.movies) || [];

  const handleFavClick = (addToFav, movieObj) => {
    if (addToFav) {
      dispatch(addFavMovie(movieObj));
    } else {
      dispatch(deleteFavMovie(movieObj));
    }
  };

  return (
    <div className="favourite">
      <h1>Favourite</h1>
      {favourites.length < 1 ? (
        <h2>Opps,No Favourite</h2>
      ) : (
        <div className="movie-list">
          {favourites.map((movie) => {
            return (
              <Card
                key={movie.id}
                movie={movie}
                title={movie.title}
                isFav={true}
                handleFavClick={handleFavClick}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Favourite;
