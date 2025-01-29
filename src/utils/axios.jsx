import axios from "axios";

export const Axios = axios.create({
  baseURL: "https://newsapi.org/v2/everything",
  headers: {
    "X-Api-Key": import.meta.env.VITE_API_KEY,
  },
});
