import { Route, Routes } from "react-router-dom";
import LeftNavbar from "../leftNavbar/LeftNavbar";
import NowPlaying from "../nowPlaying/NowPlaying";
import TopNavbar from "../topNavbar/TopNavbar";
import Homepage from "../homepage/Homepage";
import "./main.scss";
import Search from "../search/Search";
import Artist from "../artist/Artist";
import Album from "../album/Album";

const Main = () => {
  return (
    <div className="main-container">
      <div className="top-container">
        <LeftNavbar />
        <div className="right-container">
          <TopNavbar />
          <Routes>
            <Route path="homepage" element={<Homepage />} />
            <Route path="artist/:id" element={<Artist />} />
            <Route path="search" element={<Search />} />
            <Route path="album/:id" element={<Album />} />
          </Routes>
        </div>
      </div>
      <NowPlaying />
    </div>
  );
};

export default Main;
