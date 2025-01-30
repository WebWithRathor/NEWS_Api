import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { getCurrentNews } from "../store/actions/newsAction";

const News = () => {
  const dispatch = useDispatch();
  const { title } = useParams();

  const { currentNews } = useSelector((store) => store.newsReducer);

  useEffect(() => {
    if (currentNews == null) {
      dispatch(getCurrentNews({title}));
    }
  },[]);

  return currentNews && (
    <div className="w-full bg-zinc-50 flex  justify-center min-h-screen">
      <div className="w-[50rem] bg-zinc-200/[0] py-20 h-full">
        <div className="w-full h-96 relative rounded-lg overflow-hidden">
          <img
            className="w-full h-full object-cover object-top"
            src={currentNews.urlToImage}
            alt=""
          />
          <div
            className="flex z-[99] absolute bottom-0 py-6 text-white w-full left-0 px-10 items-center justify-between"
            style={{
              background: "linear-gradient(to top, black, transparent)",
            }}
          >
            <div className="flex items-center">
              <h1 className="text-sky-500 font-semibold">Source </h1>
              <h2 className="text-sm font-semibold opacity-80 ml-1">
                {" "}
                , 20 Jan 2025
              </h2>
            </div>
            <h2>Author</h2>
          </div>
        </div>
        <div className="">
          <h1 className="font-bold capitalize text-2xl mt-4">
            {currentNews.title}
          </h1>
          <h4 className="text-sky-700 text-sm font-semibold mt-2">
            Description-
          </h4>
          <p className="border-b mb-4 border-sky-800/[.5] pb-4">
            {currentNews.description}
          </p>
          <p className="text-lg">
           {currentNews.content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default News;
