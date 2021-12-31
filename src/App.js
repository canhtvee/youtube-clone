import React from "react";
import "./App.css";
import { Routes, Route, Outlet } from "react-router-dom";
import AppHeader from "./components/app-header/AppHeader";
import WatchLayout from "./components/layout-watch/WatchLayout";
import AppBody from "./components/app-body/AppBody";
import FirstComponent from "./global-states/FirstComponent";

function App() {
  return (
    <div className="app">
      {/* <AppHeader />
      <Routes>
        <Route exact path="/*" element={<AppBody />} />
        <Route path="/watch" element={<WatchLayout />} />
      </Routes>
      <Outlet /> */}
      <FirstComponent />
    </div>
  );
}

export default App;
