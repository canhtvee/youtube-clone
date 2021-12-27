import React from "react";
import "./App.css";
import { Routes, Route, Outlet } from "react-router-dom";
import AppHeader from "./components/app-header/AppHeader";
import GeneralLayout from "./components/layout-general/GeneralLayout";
import WatchLayout from "./components/layout-watch/WatchLayout";
import FirstComponent from "./custom-hooks/FirstComponent";
import SecondComponent from "./custom-hooks/SecondComponent";

function App() {
  return (
    <div className="app">
      <AppHeader />
      <Routes>
        <Route exact path="/*" element={<GeneralLayout />} />
        <Route path="/watch" element={<WatchLayout />} />
      </Routes>
      <Outlet />
      {/* <FirstComponent />
      <SecondComponent /> */}
    </div>
  );
}

export default App;
