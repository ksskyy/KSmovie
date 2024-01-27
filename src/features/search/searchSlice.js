import { createSlice } from "@reduxjs/toolkit";

function searchMovie() {
  let searchMovieFrom = localStorage.getItem(searchMovie);

  const initialState = {
    result: searchMovie(),
  };
}

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchResult: (state, action) => {
      state.search = action.payload;
    },
  },
});
export const { searchResult } = searchSlice.actions;
export default searchSlice.reducer;
