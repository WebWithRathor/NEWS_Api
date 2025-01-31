import { getAllNews } from "../../services/newsService";
import { setCurrentnews, setNews, setQuery, setTotalPages } from "../reducers/newsSlice";

export const allNews = ({query,pageNo,selectedSorting,selectedDate}) => async (dispatch,getState) => {

    if(query)dispatch(setQuery(query))
    else query = getState().newsReducer.query != ''? getState().newsReducer.query : undefined;


    


    const {data} =  await getAllNews(query,pageNo,selectedDate,selectedSorting);
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
