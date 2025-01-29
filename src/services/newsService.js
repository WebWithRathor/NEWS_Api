import { Axios } from "../utils/axios";

export const getAllNews = async (query="kuch") => {
  const data = await Axios.get(`?q=${query}&pageSize=5&page=10`);
  return data;
};

export const getFilteredNews = (filters) => {};

export const getNewsById = (id) => {};
