import React from "react";
import { Routes, Route } from "react-router-dom";
import { ChapterTwo } from "../../modules/chapter-2";
import SignIn from "../../modules/chapter-2/widgets/authentifications";
import LayoutInit from "../Messenger/LayoutInit";
import Eror from "../Messenger/eror";
import ChapterOne from "../../modules/chapter-1/ChapterOne";
// import Headers from "../components/Messenger/Header";

export default function BaseRoute() {
  // const arrayroute = [
  //   {path:"home",element:<ChapterTwo/>}],
  //   {path:"Chapter-1",element:<ChapterOne/>}]
  //   {path:"Chapter-2",element:<ChapterTwo/>}]
  return (
    <React.Suspense>
      <Routes>
        <Route index element={ <ChapterOne />  } />
        <Route path="home" element={ <Home />} />
        <Route path="auth" element={<SignIn />} />
        <Route path="*" element={<Eror/>}/>
      </Routes>
    </React.Suspense>
  );
}

const Home = () => {
  return <h3>Ini home looo…</h3>;
};


