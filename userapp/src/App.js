import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import"./components/pages/style.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import List from './components/pages/List';
import NewList from './components/pages/NewList'

function App() {
  return (
    <>
   
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path= "/register" element={<Register />}/>
        <Route path = "/List" element={<List/>}/>
        <Route path = "/newlist" element={<NewList/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;

