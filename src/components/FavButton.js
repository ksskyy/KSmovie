import { color } from "framer-motion";
import { HiOutlineHeart, HiMiniHeart } from "react-icons/hi2";

function FavButton({ movieObj, remove, handleFavClick }) {
  function handleAddFav() {
    handleFavClick(true, movieObj);
  }

  function handleRemoveFav() {
    handleFavClick(false, movieObj);
  }

  return (
    <>
      {remove === false ? (
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
  remove: false,
};

export default FavButton;
