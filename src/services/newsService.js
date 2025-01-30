import { Axios } from "../utils/axios";

export const getAllNews = async (query="kuch",pageNo=1) => {
  const data = await Axios.get(`?q=${query}&pageSize=5&page=${pageNo}`);
  return data;
};

export const getFilteredNews = (filters) => {};

export const getNewsById = (id) => {};
