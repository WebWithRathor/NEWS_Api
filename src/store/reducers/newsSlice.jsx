import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  News: [],
  totalPages:0,
  currentNews:null,
  query:'',
  filters:null
};

export const newsSlice = createSlice({
  name: "newsSlice",
  initialState,
  reducers: {
    setNews: (state, action) => {
      state.News = action.payload;
    },
    setTotalPages:(state, action) => {
      state.totalPages = action.payload;
    },
    setCurrentnews:(state, action) => {
      state.currentNews = action.payload;
    },
    setQuery:(state, action) => {
      state.query = action.payload;
    },
    setFilters:(state, action) => {
      state.filters = action.payload;
    }
  },
});

export const {setQuery,setFilters, setNews,setTotalPages,setCurrentnews } = newsSlice.actions;
export default newsSlice.reducer;
