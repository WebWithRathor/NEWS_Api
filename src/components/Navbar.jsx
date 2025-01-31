import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { allNews } from "../store/actions/newsAction";

const Navbar = () => {

  const {query:Query} =useSelector(store=>store.newsReducer);
  const [query, setQuery] = useState(Query||"");
  const dispatch = useDispatch();
  const search = useCallback(() => {
    if (query != "") {
      dispatch(allNews({ query }));
    }
  },[query]);

  return (
    <div className="flex bg-zinc-100 z-[99] justify-between items-center fixed top-0 left-0 w-full px-6 py-4">
      <Link to={"/"}>
        <h1 className="text-sky-800 font-bold text-lg">Newzz</h1>
      </Link>
      <div className="search flex w-[20rem] bg-white items-center justify-center rounded-full overflow-hidden">
        <input
          type="text"
          className="grow outline-none px-4 pr-1 py-2"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        <div
          onClick={search}
          className="flex items-center justify-center py-2 duration-150 group hover:bg-sky-800 px-1 pr-2"
        >
          <img
            className="h-6 p-1 group-hover:invert"
            src="https://cdn-icons-png.flaticon.com/128/622/622669.png"
            alt=""
          />
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <h1>About Us</h1>
        <h1>Contact</h1>
      </div>
    </div>
  );
};

export default Navbar;
