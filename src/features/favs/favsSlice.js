import { createSlice } from "@reduxjs/toolkit";
import { movieStorageName } from "../../global/globals";

function favMovie() {
  let favsMovieFromStorage = localStorage.getItem(movieStorageName);
  if (favsMovieFromStorage === null) {
    favsMovieFromStorage = [];
  } else {
    favsMovieFromStorage = JSON.parse(favsMovieFromStorage);
  }
  return favsMovieFromStorage;
}
const initialState = {
  movies: favMovie(),
};
function getIndex(movie, arr) {
  return arr.findIndex((arrMovie) => arrMovie.id === movie.id);
}

export const favsSlice = createSlice({
  name: "favs",
  initialState,
  reducers: {
    addFavMovie: (state, action) => {
      const newFavMovie = [...state.movies, action.payload];
      localStorage.setItem(movieStorageName, JSON.stringify(newFavMovie));
      return { ...state, movies: newFavMovie };
    },
    deleteFavMovie: (state, action) => {
      const movieCopy = state.movies.slice();
      movieCopy.splice(getIndex(action.payload, state.movies), 1);
      localStorage.setItem(movieStorageName, JSON.stringify(movieCopy));
      return { ...state, movies: movieCopy };
    },
  },
});
export const { addFavMovie, deleteFavMovie } = favsSlice.actions;
export default favsSlice.reducer;
