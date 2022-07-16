import { axios } from "axios";
import React,{useState,useEffect} from 'react'
import './style.css';
import axis from '../Asset/axis.png';
import hdfc from '../Asset/hdfc.png';
import kotak from '../Asset/kotak.png';
import icici from '../Asset/icici.png';
import fb2 from '../Asset/fb2.png';
import twitter from '../Asset/twitter.jpg';
import insta from '../Asset/insta.jpg';
import youtube from '../Asset/youtube.jpg';
import { textAlign } from "@mui/system";




function LoanDetails(){
    const[loan,setLoan]=useState([]);



const getLoans = async () => {
    try {
      let config = {
        headers: {
          "x-access-token": localStorage.getItem("userToken"),
        },
      };
      let response = await axios.get(
        "https://loanprojectapi.herokuapp.com/api/admin/loan",
        config
      );

      if (response.data.success) {
        setLoan(response.data.data)
      } else {
      }
      console.log("fetch data");
      console.log(response, "user data response");
    } catch (err) {
      console.log("fetch error", err);
    }
  };

  useEffect(() => {
    getLoans();
  }, []);


  return(
    <>
        <div className="jelly" style={{marginTop:"5%"}}>
            <h3>Home Loan</h3>
            <h4>Loan Description</h4>
            <p>In finance, a <span style={{fontWeight:"bold"}}>loan</span>  is the <span style={{fontWeight:"bold"}}>lending</span>of money by one or more individuals, organizations, or other ... For a more detailed  <span style={{fontWeight:"bold"}}>description</span> of the "discharge of indebtedness", look at Section 108 (Cancellation of Debt (COD) Income) of the Internal </p>
            <h5>Terms and Condititons</h5>
            <p>In finance, a loan is the lending of money by one or more individuals, organizations, or other ... For a more detailed description of the "discharge of indebtedness", look at Section 108 (Cancellation of Debt (COD) Income) of the Internal</p>
  


            <footer className="bg-dark text-center text-lg-start" style={{marginTop:"10%"}}>
  <div className="container p-4">
    <div className="row">
      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h6 className="text-uppercase text-white mb-2 fs-5 " style={{marginTop:"15%"}}>Our Bank Partners</h6>

        <ul className="list-unstyled mb-0">
          <li>
            <img src={axis} alt="loading" style={{width:"35%"}}/>
          </li>
          <li>
          <img src={hdfc} alt="loading" style={{width:"35%"}}/>
          </li>
          <li>
          <img src={kotak} alt="loading" style={{width:"35%"}}/>
          </li>
          <li>
          <img src={icici} alt="loading" style={{width:"35%"}}/>
          </li>
        </ul>
      </div>
      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h6 className="text-uppercase text-white mb-2 fs-5 " style={{marginTop:"15%"}}>Our Products</h6>

        <ul className="list-unstyled mb-3">
          <li>
            <a href="#!" className="text-white-50" style={{textDecoration:"none",paddingBottom:"10%"}}>Home Loan</a>
          </li>
          <li>
            <a href="#!" className="text-white-50" style={{textDecoration:"none"}}>Business Loan</a>
          </li>
          <li>
            <a href="#!" className="text-white-50" style={{textDecoration:"none"}}>Education Loan</a>
          </li>
          <li>
            <a href="#!" className="text-white-50" style={{textDecoration:"none"}}>Personal Loan</a>
          </li>
        </ul>
      </div>
      <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h6 class="text-uppercase text-white mb-2 fs-5 fs-15 " style={{marginTop:"15%"}}>Quick Links</h6>

        <ul class="list-unstyled mb-0">
          <li>
            <a href="#!" className="text-white-50" style={{textDecoration:"none"}}>About Us</a>
          </li>
          <li>
            <a href="#!" className="text-white-50" style={{textDecoration:"none"}}>Contact Us</a>
          </li>
          <li>
            <a href="#!" className="text-white-50" style={{textDecoration:"none"}}>Our Services</a>
          </li>
          <li>
            <a href="#!" className="text-white-50" style={{textDecoration:"none"}}>Privacy Policy</a>
          </li>
          <li>
            <a href="#!" className="text-white-50" style={{textDecoration:"none"}}>FAQ's</a>
          </li>
          <li>
            <a href="#!" className="text-white-50" style={{textDecoration:"none"}}>Loan Calculator</a>
          </li>
        </ul>
      </div>

      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h6 className="text-uppercase text-white mb-2 fs-5," style={{marginTop:"15%"}}> Connect With Us</h6>
<ul className="list-unstyled">
        <li>
            <img src={fb2} alt="loading" style={{width:"10%",borderRadius:"10px",listStyleType:"none"}}/><span style={{color:"blue",marginLeft:"2%",paddingTop:"3%"}}>Facebook</span>
          </li>
          <li>
          <img src={insta} alt="loading" style={{width:"10%",borderRadius:"10px",listStyleType:"none"}}/><span style={{color:"blue",marginLeft:"2%",marginTop:"15%"}}>Instagram</span>
          </li>
          <li>
          <img src={twitter} alt="loading" style={{width:"10%",borderRadius:"10px",listStyleType:"none"}}/><span style={{color:"blue",marginLeft:"2%",paddingTop:"3%"}}>Twitter</span>
          </li>
          <li>
          <img src={youtube} alt="loading" style={{width:"10%",borderRadius:"10px",listStyleType:"none"}}/><span style={{color:"blue",marginLeft:"2%",paddingTop:"3%"}}>You-tube</span>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div className="text-center p-3 mt-2" style={{backgroundColor: "gray",height:"12vh", textAlign:"center",color:"white", marginTop:"4%"}}>
   <span style={{textAlign:"center"}}>© 2020 Copyright:</span> 
    <a className="text-white-50" style={{marginTop:"5%"}}  href="https://mdbootstrap.com">MDBootstrap.com</a>
  </div>
</footer>
 </div>
           
    </>
  )
};
  export default LoanDetails;