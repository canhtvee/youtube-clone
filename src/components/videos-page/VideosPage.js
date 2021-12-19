import React from "react";
import "./VideosPage.css";

export default function VideosPage() {
  getVideosList();
  return (
    <div className="videosPage">
      <p>This is videos page</p>
    </div>
  );
}

async function getVideosList() {
  const API_KEY = "AIzaSyB8KQlDPPmGgU6x8KRol4r9OZZvbAM6WQs";
  const PLAY_LIST_HTTP = "https://www.googleapis.com/youtube/v3/playlistItems";

  const res = await fetch(`
${PLAY_LIST_HTTP}?
part=snippet
&playlistId=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3
&maxResults=50
&key=${API_KEY}
`);
  const data = await res.json();
  console.log(data);
}
