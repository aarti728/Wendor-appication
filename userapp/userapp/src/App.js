import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



import"./components/pages/style.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import List from './components/pages/List';
import NewList from './components/pages/NewList'
import OTPVerification from "./components/pages/User Auth/OTPVerification";
import CreatePassword from "./components/pages/User Auth/CreatePassword";
import MobileVerification from "./components/pages/User Auth/MobileVerification";
import NewotpVerification from "./components/pages/User Auth/NewotpVerification";
import NewCPassword from "./components/pages/User Auth/NewCpassword";
import Profile from "./components/pages/User Auth/Profile";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Emi from "./components/pages/Emi";
import LoanDetails from "./components/pages/LoanDetails";



function App() {
  return (
    <>
  
    <Router>
     <Home />
      <Routes>
        {/* <Route path="/" element={<Home />}/> */}
        <Route path="/login" element={<Login />}/>
        <Route path= "/register" element={<Register />}/>
        <Route path = "/List" element={<List/>}/>
        <Route path = "/newlist" element={<NewList/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path = "/otpverification" element={<OTPVerification/>}/>
        <Route path = "/createpass" element={<CreatePassword/>}/>
        <Route path = "/mobileVerification" element={<MobileVerification/>}/>
        <Route path="/newotpVerification" element={<NewotpVerification/>}/>
        <Route path="/newcpassword" element={<NewCPassword/>}/>
        <Route path ="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path ="/emi" element={<Emi/>}/>
        <Route path ='/loanDetails' element={<LoanDetails/>}/>


      </Routes>
    </Router>
    </>
  );
}

export default App;

