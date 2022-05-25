
import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route,Link} from "react-router-dom";
import Login from './components/pages/Login';
import Registration from './components/pages/Registration';

function App() {
  return (
    <>
    <Router>
    {/* <Link to ='/Registration'>Registration </Link> */}
    {/* <Link to ='/Login'>Login </Link> */}
      <Routes>
        <Route path='/Registration' element={<Registration/>}/>
        <Route path='/Login' element={<Login/>}/>
      </Routes>
    </Router>
  
    </>
  );
}

export default App;
