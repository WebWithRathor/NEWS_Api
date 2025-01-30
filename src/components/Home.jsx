import React from "react";
import NewsCard from "./NewsCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentNews } from "../store/actions/newsAction";

const Home = ({ News, totalPages, pageNo, setpageNo }) => {
  const dispatch = useDispatch();

  const handleSetNews = (details) => {
    dispatch(getCurrentNews({details}));
  };

  return (
    <div className="w-full bg-zinc-50 flex flex-col items-center justify-center min-h-screen">
      <div className="w-[50rem] pt-20">
        {News.map((details, i) => (
          <Link
            to={"/news/" + details.title}
            onClick={() => handleSetNews(details)}
            key={i}
          >
            <NewsCard details={details} />
          </Link>
        ))}
      </div>
      <div className="w-[50rem] mt-5 sticky bottom-0 px-20 bg-white shadow-inner h-20 rounded flex justify-between items-center">
        <button
          className="px-8 py-2 bg-sky-600 text-white font-medium hover:bg-sky-800 rounded"
          onClick={() => setpageNo(pageNo != 1 ? pageNo - 1 : pageNo)}
        >
          Prev
        </button>
        <h1 className="font-semibold">
          Page no : {pageNo}/{totalPages}
        </h1>
        <button
          className="px-8 py-2 bg-sky-600 text-white font-medium hover:bg-sky-800 rounded"
          onClick={() => setpageNo(pageNo != totalPages ? pageNo + 1 : pageNo)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
