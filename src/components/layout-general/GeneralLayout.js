import React from "react";
import "./GeneralLayout.css";
import SideNavLayout from "../layout-side-nav/SideNavLayout";
import VideosLayout from "../layout-videos/VideosLayout";

export default function GeneralPage() {
  return (
    <div className="generalLayout">
      <SideNavLayout />
      <VideosLayout />
    </div>
  );
}
