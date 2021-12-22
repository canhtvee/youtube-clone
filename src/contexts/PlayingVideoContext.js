import React from "react";
import { useState } from "react";

const PlayingVideoContext = React.createContext();

function PlayingVideoProvider({ children }) {
  const [videoId, setVideoId] = useState("");
  const value = { videoId, setVideoId };
  return (
    <PlayingVideoContext.Provider value={value}>
      {children}
    </PlayingVideoContext.Provider>
  );
}

export { PlayingVideoContext, PlayingVideoProvider };
