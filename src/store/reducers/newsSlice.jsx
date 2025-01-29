import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  News: [],
};

export const newsSlice = createSlice({
  name: "newsSlice",
  initialState,
  reducers: {
    setNews: (state, action) => {
      state.News = action.payload;
    },
  },
});

export const { setNews } = newsSlice.actions;
export default newsSlice.reducer;
