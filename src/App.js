import "./App.css";
import AppHeader from "./components/app-header/AppHeader";
import SideNav from "./components/side-nav/SideNav";
import VideosPage from "./components/videos-page/VideosPage";

function App() {
  return (
    <div className="app">
      <AppHeader />
      <div className="app_page">
        <SideNav />
        <VideosPage />
      </div>
    </div>
  );
}

export default App;
