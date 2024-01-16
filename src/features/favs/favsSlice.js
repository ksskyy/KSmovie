import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  movies: null,
};
export const favsSlice = createSlice({
  name: "favs",
  initialState,
  reducers: {
    addFavMovie: (state, action) => {},
    deleteFavMovie: (state, action) => {},
  },
});
export const { addFavMovie, deleteFavMovie } = favsSlice.actions;
export default favsSlice.reducer;
