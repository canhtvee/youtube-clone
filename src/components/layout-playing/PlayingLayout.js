import React from "react";
import "./PlayingLayout.css";
import { useParams } from "react-router-dom";

export default function PlayingLayout() {
  const videoId = useParams().id;
  return (
    <div className="playingLayout">
      <iframe
        className="playingFrame"
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
}
