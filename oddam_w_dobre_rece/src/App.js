import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import SignIn from "./components/SignIn";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path='zaloguj' element={<LogIn/>}/>
              <Route path='zalozKonto' element={<SignIn/>}/>
          </Routes>
      </BrowserRouter>
  );
}
export default App;
