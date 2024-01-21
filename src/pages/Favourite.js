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

  useEffect(() => {
    console.log("Favourites:", favourites);
  }, [favourites]);

  const handleFavClick = (addToFav, movieObj) => {
    if (addToFav) {
      dispatch(addFavMovie(movieObj));
    } else {
      dispatch(deleteFavMovie(movieObj));
    }
  };

  return (
    <main>
      <div className="favourite">
        <h1>Favourite</h1>
        {favourites.length < 1 ? (
          <p>No Favourite</p>
        ) : (
          <div>
            {favourites.map((movie) => {
              return (
                <Card
                  key={movie.id}
                  movie={movie}
                  isFav={true}
                  handleFavClick={handleFavClick}
                />
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
};

export default Favourite;
