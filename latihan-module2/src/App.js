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
import LayoutInit from "./components/Messenger/LayoutInit";
import BaseRoute from "./components/apps/BaseRoute";

function App() {
  // const createSessionStorage = () => {
  //   sessionStorage.setItem('tokenSession', '12345')
  //   alert('Success save token to session storage')
  // }
  // const removeSessionStorage = () => {
  //   sessionStorage.removeItem('tokenSession', '12345')
  //   alert('Success remove token to session storage')
  // }
  // const createLocalStorage = () => {
  //   localStorage.setItem('tokenLocal', '54321')
  //   alert('Success save token to local storage')
  // }
  // const removeLocalStorage = () => {
  //   localStorage.removeItem('tokenLocal', '54321')
  //   alert('Success remove token to local storage')
  // }
    
 return (
  //     <>
  //     <h1>session storage</h1>
  //     <button onClick={createSessionStorage}>Set token sessionStorage</button>
  //     <div>session storage : {sessionStorage.getItem('tokenSession')}</div>
  //     <button onClick={removeSessionStorage}>remove token sessionStorage</button>
  //     <h1>local storage</h1>
  //     <button onClick={createLocalStorage}>Set token localStorage</button>
  //     <div>local storage : {sessionStorage.getItem('tokenLocal')}</div>
  //     <button onClick={removeLocalStorage}>remove token localStorage</button>
  //   </>
    <BrowserRouter>
        <BaseRoute/>
    </BrowserRouter>
  );
}

export default App;
