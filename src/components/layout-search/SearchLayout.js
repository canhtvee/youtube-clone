import React from "react";
import "./SearchLayout.css";
import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { YoutubeApi } from "../../youtube-api/YoutubeApi";
import SearchCard from "./SearchCard";
import { VideosData } from "../../VideosData";

export default function SearchLayout() {
  const searchParams = useSearchParams()[0];
  let searchTerm = searchParams.get("search_query") || "";
  let queryCode = searchTerm.trim().replace(/ +/g, "%20");

  console.log("SearchLayout: queryCode = ", queryCode);

  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    // YoutubeApi.fetchSearchList(queryCode).then((list) => setSearchList(list));
    YoutubeApi.fetchSearchList(queryCode);
  }, [queryCode]);

  const navigate = useNavigate();
  const handleClick = (id) => () => {
    navigate({
      pathname: `/watch`,
      search: `?v=${id}`,
    });
  };

  return (
    <div className="searchLayout">
      <h2>Search Result for "{searchTerm}"</h2>
      {searchList.length === 0 ? (
        <h1>loading</h1>
      ) : (
        searchList.map((video) => {
          return (
            <SearchCard
              key={video.id}
              onClick={handleClick(video.id)}
              title={video.title}
              thumbnail={video.thumbnail}
            />
          );
        })
      )}
    </div>
  );
}
