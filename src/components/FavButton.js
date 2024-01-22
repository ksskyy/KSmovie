import { PiHeartDuotone, PiHeartFill } from "react-icons/pi";

function FavButton({ movieObj, fav, handleFavClick }) {
  function handleToggleFav() {
    if (fav) {
      handleFavClick(false, movieObj);
    } else {
      handleFavClick(true, movieObj);
    }
  }

  return (
    <div onClick={handleToggleFav}>
      {fav ? <PiHeartFill /> : <PiHeartDuotone />}
    </div>
  );
}

FavButton.defaultProps = {
  fav: false,
};

export default FavButton;
