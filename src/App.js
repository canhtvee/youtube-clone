import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import AppHeader from "./components/app-header/AppHeader";
import GeneralLayout from "./components/layout-general/GeneralLayout";
import PlayingLayout from "./components/layout-playing/PlayingLayout";
import { PlayingVideoProvider } from "./contexts/PlayingVideoContext";

function App() {
  return (
    <Router>
      <div className="app">
        <AppHeader />
        <PlayingVideoProvider>
          <Routes>
            <Route exact path="/" element={<GeneralLayout />} />
            <Route path="/playing" element={<PlayingLayout />} />
          </Routes>
          <Outlet />
        </PlayingVideoProvider>
      </div>
    </Router>
  );
}

export default App;
