import { HiOutlineHeart } from "react-icons/hi2";

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
        <HiOutlineHeart onClick={handleAddFav} />
      ) : (
        // <button onClick={handleAddFav}>Add To Favs</button>
        <HiMiniHeart onClick={handleRemoveFav} />
        // <button onClick={handleRemoveFav}>Remove From Favs</button>
      )}
    </>
  );
}

FavButton.defaultProps = {
  remove: false,
};

export default FavButton;
