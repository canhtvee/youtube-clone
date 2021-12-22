import React from "react";
import "./VideoCard.css";

export default function VideoCard(props) {
  return (
    <div onClick={props.onVideoCardClick} className="videoCard">
      <img className="videoCard_thumbnail" src={props.thumbnail} alt="" />
      <h3 className="videoCard_title">{props.title}</h3>
    </div>
  );
}
