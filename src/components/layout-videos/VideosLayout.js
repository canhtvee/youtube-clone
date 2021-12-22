import React from "react";
import "./VideosLayout.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { VideosData } from "../../VideosData";
import VideoCard from "../video-card/VideoCard";
import { PlayingVideoContext } from "../../contexts/PlayingVideoContext";

export default function VideosLayout() {
  const navigate = useNavigate();
  const { setVideoId } = useContext(PlayingVideoContext);
  function handleClick(id) {
    setVideoId(id);
    navigate("/playing");
  }

  return (
    <div className="videosLayout">
      {VideosData.map((video) => {
        return (
          <VideoCard
            key={video.id}
            onVideoCardClick={() => handleClick(video.id)}
            title={video.title}
            thumbnail={video.thumbnail}
          />
        );
      })}
    </div>
  );
}
