import React from "react";
import "./WatchLayout.css";
import { useSearchParams } from "react-router-dom";

export default function WatchLayout() {
  const searchParams = useSearchParams()[0];
  const videoId = searchParams.get("v") || "";
  return (
    <div className="watchLayout">
      <iframe
        className="watchFrame"
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
}
