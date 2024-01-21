import { HiOutlineHeart, HiMiniHeart } from "react-icons/hi2";

function FavButton({ movieObj, fav, handleFavClick }) {
  function handleToggleFav() {
    if (fav) {
      handleFavClick(false, movieObj);
    } else {
      handleFavClick(true, movieObj);
    }
  }

  return (
    <div onClick={handleToggleFav} className="heart">
      {fav ? <HiMiniHeart /> : <HiOutlineHeart />}
    </div>
  );
}

FavButton.defaultProps = {
  fav: false,
};

export default FavButton;
