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

function App() {
  return (
    <Router>
      <div className="app">
        <AppHeader />
        <Routes>
          <Route exact path="/*" element={<GeneralLayout />} />
          <Route path="/playing/:id" element={<PlayingLayout />} />
        </Routes>
        <Outlet />
      </div>
    </Router>
  );
}

export default App;
