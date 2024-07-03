import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import SignIn from "./components/SignIn";
import Layout from "./components/Layout";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path='logIn' element={<LogIn/>}/>
                <Route path='signIn' element={<SignIn/>}/>
              </Route>
          </Routes>
      </BrowserRouter>
  );
}
export default App;
