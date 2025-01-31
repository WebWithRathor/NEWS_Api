import { Axios } from "../utils/axios";

export const getAllNews = async (query="kuch",pageNo=1,date,sorting) => {
  const data = await Axios.get(`?q=${query}&pageSize=5&page=${pageNo}&sortBy=${sorting}&from=${date}`);
  return data;
};
