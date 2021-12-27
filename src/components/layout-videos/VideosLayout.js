import React from "react";
import "./VideosLayout.css";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { VideosData } from "../../VideosData";
import VideoCard from "./VideoCard";

export default function VideosLayout() {
  const navigate = useNavigate();
  const handleClick = (id) => () => {
    navigate({
      pathname: `/watch`,
      search: `?${createSearchParams({
        v: id,
      })}`,
    });
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
