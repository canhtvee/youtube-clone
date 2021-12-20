import React from "react";
import "./VideosPage.css";
import { VideosData } from "../../VideosData";
import VideoCard from "../video-card/VideoCard";

export default function VideosPage() {
  console.log(VideosData);
  return (
    <div className="videosPage">
      {VideosData.map((video) => {
        return <VideoCard title={video.title} thumbnail={video.thumbnail} />;
      })}
    </div>
  );
}
