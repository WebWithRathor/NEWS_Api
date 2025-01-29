import React, { useEffect } from "react";
import Filter from "../components/Filter";
import Home from "../components/Home";
import { useDispatch, useSelector } from "react-redux";
import { allNews } from "../store/actions/newsAction";

const HomeLayout = () => {
  const dispatch = useDispatch();
  const { News } = useSelector((store) => store.newsReducer);

  useEffect(() => {
    if(News.length == 0)dispatch(allNews());
  }, []);

  return (
    <>
      <Filter />
      <Home News={News} />
    </>
  );
};

export default HomeLayout;
