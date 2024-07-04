import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import SignIn from "./components/SignIn";
import LogOut from "./components/LogOut";
import Layout from "./components/Layout";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path='logowanie' element={<LogIn/>}/>
                <Route path='rejestracja' element={<SignIn/>}/>
                <Route path='wylogowano' element={<LogOut/>}/>
              </Route>
          </Routes>
      </BrowserRouter>
  );
}
export default App;
