// // import logo from './logo.svg';
// import './App.css';
// import MyProfile from './components/MyProfile';
// import Profile from './components/Profile';

// function App() {
//   return (
//     <div>
//      <MyProfile/>
//      <Profile/>
//     </div>
//   );
// }

// export default App;


import React from "react";
import { BrowserRouter } from "react-router-dom";
// import BaseRoute from "./apps/BaseRoute";
import LayoutInit from "./components/Messenger/LayoutInit";

function App({ basename }) {
  return (
    <div>
      <LayoutInit />
    </div>
  );
}

export default App;
