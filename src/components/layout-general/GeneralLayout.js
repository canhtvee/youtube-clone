import React, { useEffect } from "react";
import "./GeneralLayout.css";
import {
  Routes,
  Route,
  Outlet,
  useParams,
  Navigate,
  useNavigate,
} from "react-router-dom";
import SideNavLayout from "../layout-side-nav/SideNavLayout";
import VideosLayout from "../layout-videos/VideosLayout";

export default function GeneralPage() {
  return (
    <div className="generalLayout">
      <SideNavLayout />
      <Routes>
        <Route index element={<VideosLayout />} />
        <Route path="/feed/:pageName" element={<GeneralChildLayout />} />
      </Routes>
      <Outlet />
    </div>
  );
}

function GeneralChildLayout() {
  const pageName = useParams().pageName;
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (pageName === "home") {
  //     navigate("/");
  //   }
  // }, []);

  if (pageName === "home") {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="generalChildLayout">
      <h2>{pageName} page</h2>
    </div>
  );
}
