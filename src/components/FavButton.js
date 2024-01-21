import { HiOutlineHeart, HiMiniHeart } from "react-icons/hi2";

function FavButton({ movieObj, fav, handleFavClick }) {
  function handleAddFav() {
    handleFavClick(true, movieObj);
  }

  function handleRemoveFav() {
    handleFavClick(false, movieObj);
  }

  return (
    <>
      {fav === false ? (
        <HiOutlineHeart className="heart" onClick={handleAddFav} />
      ) : (
        <HiMiniHeart className="heart" onClick={handleRemoveFav} />
      )}
    </>
  );
}

FavButton.defaultProps = {
  fav: false,
};

export default FavButton;
