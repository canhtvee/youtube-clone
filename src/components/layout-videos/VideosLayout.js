import React from "react";
import "./VideosLayout.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { VideosData } from "../../VideosData";
import VideoCard from "./VideoCard";

export default function VideosLayout() {
  const navigate = useNavigate();
  const setSearchParams = useSearchParams()[1];
  const handleClick = (id) => () => {
    const v = id;
    v ? setSearchParams({ v }) : setSearchParams({});
    navigate(`/watch?v=${v}`);
  };

  return (
    <div className="videosLayout">
      <h2>Trending Videos</h2>
      <div className="videosLayout_content">
        {VideosData.map((video) => {
          return (
            <VideoCard
              key={video.id}
              onClick={handleClick(video.id)}
              title={video.title}
              thumbnail={video.thumbnail}
            />
          );
        })}
      </div>
    </div>
  );
}
