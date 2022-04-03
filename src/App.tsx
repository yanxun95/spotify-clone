import Homepage from "./Components/Homepage/Homepage";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import "./app.scss";
import LeftNavbar from "./Components/LeftNavbar/LeftNavbar";
import NowPlaying from "./Components/NowPlaying/NowPlaying";
import TopNavbar from "./Components/TopNavbar/TopNavbar";

function App() {
  useEffect(() => {
    document.title = "Spotify";
  }, []);

  return (
    <div className="main-container">
      <div className="top-container">
        <LeftNavbar />
        <div className="right-container">
          <TopNavbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </div>
      </div>
      <NowPlaying />
    </div>
  );
}

export default App;
