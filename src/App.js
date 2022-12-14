import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/pages/Main";
import Special from "./components/pages/Special";
import Image from "./components/pages/Image";
import Video from "./components/pages/Video";
import SearchConts from "./components/pages/SearchConts";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/special" element={<Special />} />
        <Route path="/image" element={<Image />} />
        <Route path="/video" element={<Video />} />
        <Route path="/search/:searchTerm" element={<SearchConts />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
