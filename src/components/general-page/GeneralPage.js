import React from "react";
import "./GeneralPage.css";
import SideNav from "../side-nav/SideNav";
import VideosPage from "../videos-page/VideosPage";

import { useNavigate } from "react-router-dom";

export default function GeneralPage() {
  const navigate = useNavigate();
  return (
    <div className="generalPage">
      <button onClick={() => navigate("/playing")}>
        Click here to navigate to PlayingPage
      </button>
      <SideNav />
      <VideosPage />
    </div>
  );
}
