import React from "react";
import "./SearchLayout.css";
import { useSearchParams, useNavigate } from "react-router-dom";
import SearchCard from "./SearchCard";
import useSearch from "./useSearch";

export default function SearchLayout() {
  const searchParams = useSearchParams()[0];
  let searchTerm = searchParams.get("search_query") || "";
  let queryCode = searchTerm.trim().replace(/ +/g, "%20");
  // console.log("SearchLayout: queryCode = ", queryCode);

  const resource = useSearch(queryCode);
  // console.log("SearchLayout: resource = ", resource);

  const navigate = useNavigate();
  const handleClick = (id) => () => {
    navigate({
      pathname: `/watch`,
      search: `?v=${id}`,
    });
  };

  return (
    <div className="searchLayout">
      <h2>Search Results for "{searchTerm}"</h2>
      {resource.status === "loading" && <h2>loading</h2>}
      {resource.status === "successful" &&
        resource.data.map((video) => {
          return (
            <SearchCard
              key={video.id}
              onClick={handleClick(video.id)}
              title={video.title}
              thumbnail={video.thumbnail}
            />
          );
        })}
      {resource.status === "error" && <h2>{resource.message}</h2>}
    </div>
  );
}
