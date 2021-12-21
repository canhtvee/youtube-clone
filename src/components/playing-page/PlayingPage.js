import React from "react";
import "./PlayingPage.css";
import { useNavigate } from "react-router-dom";

export default function PlayingPage(embedId) {
  embedId = "TENin-HxvRg";
  const navigate = useNavigate();
  return (
    <div className="playingPage">
      <button onClick={() => navigate("/")}>
        Click here to navigate to GeneralPage
      </button>

      <iframe
        className="playingFrame"
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${embedId}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}
