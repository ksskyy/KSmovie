import { createSlice } from "@reduxjs/toolkit";
function searchMovie() {
  const initialState = {
    result: null,
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
