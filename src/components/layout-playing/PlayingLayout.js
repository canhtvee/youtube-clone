import React from "react";
import "./PlayingLayout.css";
import { useContext } from "react";
import { PlayingVideoContext } from "../../contexts/PlayingVideoContext";

export default function PlayingLayout() {
  const { videoId } = useContext(PlayingVideoContext);
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
