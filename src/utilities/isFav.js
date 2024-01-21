function isFav(favs, path, id) {
  if (!Array.isArray(favs)) {
    return false;
  }
  if (path === "/favourite") {
    return true;
  }

  if (favs.length === 0) {
    return false;
  }

  return favs.some((obj) => obj.id === id);
}

export default isFav;
