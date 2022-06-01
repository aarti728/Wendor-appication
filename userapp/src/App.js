import React from "react";
import './components/pages/Login.css';
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/pages/Login";
import Registration from "./components/pages/Registration";
import Home from "./Home";

function App() {
  return (
    <>
      <Router>
        <nav >
          <Link to ='/' className='yuvi'><button>Home</button></Link>
          <Link to="/Login" className="yuvi">
            <button>Login</button>
          </Link>
          <Link to="/Registration" className="yuvi">
            <button>Registration</button>
          </Link>
          </nav>
      

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Registration" element={<Registration />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
