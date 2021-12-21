import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import AppHeader from "./components/app-header/AppHeader";
import PlayingPage from "./components/playing-page/PlayingPage";
import GeneralPage from "./components/general-page/GeneralPage";

function App() {
  return (
    <Router>
      <div className="app">
        <AppHeader />
        <Routes>
          <Route exact path="/" element={<GeneralPage />} />
          <Route path="/playing" element={<PlayingPage />} />
        </Routes>
        <Outlet />
      </div>
    </Router>
  );
}

export default App;
