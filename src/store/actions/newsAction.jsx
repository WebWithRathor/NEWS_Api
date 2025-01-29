import { getAllNews } from "../../services/newsService";
import { setNews } from "../reducers/newsSlice";

export const allNews = (query) => async (dispatch,getState) => {
    const {data} =  await getAllNews(query);
    dispatch(setNews(data.articles));
};
