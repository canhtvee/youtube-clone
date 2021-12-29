import React from "react";
import "./AppBody.css";
import { Routes, Route, Outlet } from "react-router-dom";
import SideNavLayout from "../layout-side-nav/SideNavLayout";
import VideosLayout from "../layout-videos/VideosLayout";
import FeedLayout from "./FeedLayout";
import SearchLayout from "../layout-search/SearchLayout";

export default function AppBody() {
  return (
    <div className="appBody">
      <SideNavLayout />
      <Routes>
        <Route index element={<VideosLayout />} />
        <Route path="/feed/:pageName" element={<FeedLayout />} />
        <Route path="/search" element={<SearchLayout />} />
      </Routes>
      <Outlet />
    </div>
  );
}
