import React from "react";
import { Route, Routes } from "react-router-dom";
import ChapterOne from "../../modules/chapter-1/ChapterOne";
import { ChapterTwo } from "../../modules/chapter-2/ChapterTwo";
import { ChapterThree } from "../../modules/chapter-3/ChapterThree";

export default function BaseRoute() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="chapter-1" element={<ChapterOne />} />
        <Route path="chapter-2" element={<ChapterTwo />} />
        <Route path="chapter-3" element={<ChapterThree />} />
      </Routes>
    </React.Suspense>
  );
}

const Home = () => {
  return <h2>Home Page!</h2>;
};
