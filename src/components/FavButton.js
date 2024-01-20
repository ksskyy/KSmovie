import { color } from "framer-motion";
import { HiOutlineHeart, HiMiniHeart } from "react-icons/hi2";

function FavButton({ movieData, fav, handleFavClick }) {
  function handleAddFav() {
    handleFavClick(true, movieData);
  }

  function handleRemoveFav() {
    handleFavClick(false, movieData);
  }

  return (
    <>
      {fav === false ? (
        <HiOutlineHeart className="heart" onClick={handleAddFav} />
      ) : (
        // <button onClick={handleAddFav}>Add To Favs</button>
        <HiMiniHeart className="heart" onClick={handleRemoveFav} />
        // <button onClick={handleRemoveFav}>Remove From Favs</button>
      )}
    </>
  );
}

FavButton.defaultProps = {
  fav: false,
};

export default FavButton;
