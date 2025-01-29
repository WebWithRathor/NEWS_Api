import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "./reducers/newsSlice";

export const store = configureStore({
  reducer: {
    newsReducer: newsSlice,
  },
});
