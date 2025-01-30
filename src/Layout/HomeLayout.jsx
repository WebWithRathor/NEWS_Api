import React, { useEffect, useState } from "react";
import Filter from "../components/Filter";
import Home from "../components/Home";
import { useDispatch, useSelector } from "react-redux";
import { allNews } from "../store/actions/newsAction";

const HomeLayout = () => {
  const dispatch = useDispatch();
  const { News,totalPages } = useSelector((store) => store.newsReducer);
  const [pageNo, setpageNo] = useState(1);

  useEffect(() => {
    dispatch(allNews({pageNo}));
  }, [pageNo]);

  return (
    <>
      <Filter />
      <Home News={News} totalPages={totalPages} setpageNo={setpageNo} pageNo={pageNo} />
    </>
  );
};

export default HomeLayout;
