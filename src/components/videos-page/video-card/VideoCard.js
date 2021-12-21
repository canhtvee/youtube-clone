import React from "react";
import "./VideoCard.css";

export default function VideoCard(props) {
  return (
    <div className="videoCard">
      <img className="videoCard_thumbnail" src={props.thumbnail} />
      <text className="videoCard_title">{props.title}</text>
    </div>
  );
}
