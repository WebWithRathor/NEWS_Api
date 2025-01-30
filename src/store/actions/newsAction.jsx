import { getAllNews } from "../../services/newsService";
import { setCurrentnews, setNews, setTotalPages } from "../reducers/newsSlice";

export const allNews = ({query,pageNo}) => async (dispatch,getState) => {
    const {data} =  await getAllNews(query,pageNo);
    dispatch(setTotalPages(Math.floor(data.totalResults/5)))
    dispatch(setNews(data.articles));
};

export const getCurrentNews = ({details,title}) => async (dispatch,getState) => {
    if(details){
        dispatch(setCurrentnews(details));
        return;
    }
    const {data} =  await getAllNews(title);
    dispatch(setCurrentnews(data.articles[0]));


};
