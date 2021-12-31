import React from "react";
import "./SearchLayout.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import SearchCard from "./SearchCard";
import useSearch from "./useSearch";

export default function SearchLayout() {
  const [searchParams] = useSearchParams();
  let searchTerm = searchParams.get("search_query") || "";

  const searchResource = useSearch(searchTerm);

  return (
    <div className="searchLayout">
      <h2>Search Results for "{searchTerm}"</h2>
      <SearchContent resource={searchResource} />
    </div>
  );
}

const SearchContent = ({ resource }) => {
  const navigate = useNavigate();
  const handleClick = (id) => () => {
    navigate({
      pathname: `/watch`,
      search: `?v=${id}`,
    });
  };

  if (resource.status === "successful") {
    return resource.data.map((video) => {
      return (
        <SearchCard
          key={video.id}
          onClick={handleClick(video.id)}
          title={video.title}
          thumbnail={video.thumbnail}
        />
      );
    });
  }
  if (resource.status === "error") {
    return <h2>{resource.message}</h2>;
  }
  return <h2>loading...</h2>;
};
