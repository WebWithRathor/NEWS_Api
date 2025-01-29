import React from "react";

const News = () => {
  return (
    <div className="w-full bg-zinc-50 flex  justify-center min-h-screen">
      <div className="w-[50rem] bg-zinc-200/[0] py-20 h-full">
        <div className="w-full h-96 relative rounded-lg overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1505262744895-ac5705911f6f?q=80&w=1989&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
            title Lorem, ipsum dolor.
          </h1>
          <h4 className="text-sky-700 text-sm font-semibold mt-2">
            Description-
          </h4>
          <p className="border-b mb-4 border-sky-800/[.5] pb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            quos?
          </p>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus corporis pariatur, deleniti dolor, perspiciatis facilis
            necessitatibus impedit distinctio laboriosam modi nostrum est
            doloribus iusto autem saepe accusantium sint repellat ex alias
            laborum vitae soluta, atque deserunt eligendi. Dolorem blanditiis,
            libero dicta nisi quaerat harum sed ex molestias quos sapiente
            assumenda.
          </p>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus corporis pariatur, deleniti dolor, perspiciatis facilis
            necessitatibus impedit distinctio laboriosam modi nostrum est
            doloribus iusto autem saepe accusantium sint repellat ex alias
            laborum vitae soluta, atque deserunt eligendi. Dolorem blanditiis,
            libero dicta nisi quaerat harum sed ex molestias quos sapiente
            assumenda.
          </p>
        </div>
      </div>
    </div>
  );
};

export default News;
