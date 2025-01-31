import React from "react";

const NewsCard = ({ details }) => {
  const { urlToImage, content, description, publishedAt, title, author,source } =
    details;

  return (
    <div className="bg-[#eeeeef] mb-2 p-4 rounded w-full flex gap-6">
      <div className="w-60 h-40 rounded-lg overflow-hidden">
        <a download={urlToImage}  ><img
          className="w-full h-full object-cover"
          src={
            urlToImage ??
            "https://tse2.mm.bing.net/th?id=OIP.66LHyuS8TPUh2SSKUGQyLQHaGI&pid=Api&P=0&h=220"
          }
          alt=""
        /></a>
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="font-bold uppercase ">{title}</h1>
        <h2 className="my-2">
          <strong>Author</strong> : {author}
        </h2>
        <p>{description == "No description" ? content : description}</p>
        <div className="flex  items-center mt-3 justify-between">
          <h1 className="text-sky-800 font-semibold">{source.name}</h1>
          <h2 className="text-sm font-semibold opacity-80">
            {new Date(publishedAt).toLocaleDateString("en-US", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
