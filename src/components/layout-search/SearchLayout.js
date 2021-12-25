import React from "react";
import { useParams } from "react-router-dom";
import "./SearchLayout.css";

export default function SearchLayout() {
  const searchText = useParams().searchText;
  return (
    <div className="searchLayout">
      <h3></h3>
    </div>
  );
}
