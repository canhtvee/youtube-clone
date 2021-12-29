import React from "react";
import { useParams, Navigate } from "react-router-dom";

export default function FeedLayout() {
  const pageName = useParams().pageName;

  if (pageName === "home") {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="feedLayout">
      <h2>{pageName} page</h2>
    </div>
  );
}
