import React from "react";
import NewsCard from "./NewsCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = ({News}) => {

  return (
    <div className="w-full bg-zinc-50 flex items-center justify-center min-h-screen">
      <div className="w-[50rem] py-20">
        {News.map((details, i) => (
          <Link to={"/news/" + i} key={i}>
            <NewsCard details={details} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
