import React from "react";
import "./GeneralLayout.css";
import { Routes, Route, Outlet, useParams, Navigate } from "react-router-dom";
import SideNavLayout from "../layout-side-nav/SideNavLayout";
import VideosLayout from "../layout-videos/VideosLayout";

export default function GeneralPage() {
  return (
    <div className="generalLayout">
      <SideNavLayout />
      <Routes>
        <Route index element={<VideosLayout />} />
        <Route path="/feed/:pageName" element={<GeneralFeedLayout />} />
      </Routes>
      <Outlet />
    </div>
  );
}

function GeneralFeedLayout() {
  const pageName = useParams().pageName;

  if (pageName === "home") {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="generalFeedLayout">
      <h2>{pageName} page</h2>
    </div>
  );
}
