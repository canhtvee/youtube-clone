import React from "react";
import { useSearchParams } from "react-router-dom";
import "./SearchLayout.css";

export default function SearchLayout() {
  const searchTerm = useSearchParams()[0].get("search_query") || "";
  console.log("SearchLayout: searchTerm = ", searchTerm);
  return (
    <div className="searchLayout">
      <h3>Search Result for {searchTerm}</h3>
    </div>
  );
}
