import React from "react";
import "./SearchCard.css";

export default function SearchCard(props) {
  return (
    <div onClick={props.onClick} className="searchCard">
      <img className="searchCard_thumbnail" src={props.thumbnail} alt="" />
      <h3 className="searchCard_title">{props.title}</h3>
    </div>
  );
}
