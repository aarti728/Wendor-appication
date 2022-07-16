import React from 'react'
import p5 from '../Asset/p5.jpg';
import p4 from '../Asset/p4.jpg';
import p6 from '../Asset/p6.jpg';
import p1 from '../Asset/p1.jpg';
import p2 from '../Asset/p2.jpg';
import p3 from '../Asset/p3.jpg';
import "./About.css";

const About = () => {
  return (
    <div>
        <div className="about-section">
  <h1 style={{fontSize:"55px",marginTop:"1%",color:"rgb(245, 181, 7)",fontFamily:"Times New Roman"}} >About Us</h1>
  <p style={{fontSize:"18px",marginTop:"1%",color:"rgb(17, 153, 112)", fontFamily:"lobster"}}>Though our simple online process is designed to connect our clients to potential lenders or lending partners, we do not function as a lender ourselves. We connect consumers seeking fast, hassle-free financial assistance with skilled, reputable lenders or lending partners who can provide it, and we do this without charging any fees to our customers.</p>
  <p style={{fontSize:"18px",marginTop:"1%",color:"rgb(245, 181, 7)",fontFamily:"lobster"}}>Through PersonalLoans.com, you can get needed loan funds quickly, in as little as just one business day. You don’t have to pay back these funds quickly, however, as the repayment time frame ranges from 90 days to 72 months depending on the terms of your loan. For shorter-terms loans offered</p>
</div>
 
{/* <h1 style={{fontSize:"55px",marginTop:"1%",color:"green",fontFamily:"Times New Roman"}} >.....About Us</h1> */}
<h2 style={{textAlign:"center",marginTop:"2%"}}>Our Team</h2>
<div className="row">
  <div className="column">
    <div className="push">
      <img src={p5} alt="Jane"/>
      <div ClassName="container">
        <h2 style={{fontSize:"25px",marginTop:"5%",color:"red"}}>About Us</h2>
     
        <p style={{marginTop:"6%"}}>Though our simple online process is designed to connect our clients to potential lenders or lending partners, we do not function as a lender ourselves. We connect consumers seeking fast, hassle-free financial assistance with skilled, reputable lenders or lending partners who can provide it, and we do this without charging any fees to our customers..</p>
      
        <p><button className="button" style={{marginTop:"5%"}}>Contact</button></p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="push">
      <img src={p4} alt="Mike"/>
      <div className="container">
        <h2 style={{fontSize:"25px",marginTop:"5%",color:"red"}}>What We Do</h2>
    
        <p style={{marginTop:"6%"}}>Through PersonalLoans.com, you can get needed loan funds quickly, in as little as just one business day. You don’t have to pay back these funds quickly, however, as the repayment time frame ranges from 90 days to 72 months depending on the terms of your loan. For shorter-terms loans offered</p>
      
        <p><button className="button" style={{marginTop:"7%"}}>Contact</button></p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="push">
      <img src={p6}  alt="John"/>
      <div className="container">
        <h2 style={{fontSize:"25px",marginTop:"2%",color:"red"}}>Our Mission</h2>
      
        <p style={{marginTop:"4%"}}>As a Finance we are established with the experience of many years and expertise in finance and finance related works.Our company is a growing financial services company in consumer lending, asset reconstruction and capital markets. We provide high level reliable lending and financial solutions to our customers.

Our Bank Partners




Our Products</p>
   
        <p><button className="button" style={{marginTop:"4%"}}>Contact</button></p>
      </div>
    </div>
  </div>
</div>

<div className="row">
  <div className="column">
    <div className="push">
      <img src={p3} alt="Jane"/>
      <div ClassName="container">
        <h2 style={{fontSize:"25px",marginTop:"5%",color:"red"}}>About Us</h2>
     
        <p style={{marginTop:"6%"}}>Though our simple online process is designed to connect our clients to potential lenders or lending partners, we do not function as a lender ourselves. We connect consumers seeking fast, hassle-free financial assistance with skilled, reputable lenders or lending partners who can provide it, and we do this without charging any fees to our customers..</p>
      
        <p><button className="button" style={{marginTop:"5%"}}>Contact</button></p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="push">
      <img src={p2} alt="Mike"/>
      <div className="container">
        <h2 style={{fontSize:"25px",marginTop:"5%",color:"red"}}>What We Do</h2>
    
        <p style={{marginTop:"6%"}}>Through PersonalLoans.com, you can get needed loan funds quickly, in as little as just one business day. You don’t have to pay back these funds quickly, however, as the repayment time frame ranges from 90 days to 72 months depending on the terms of your loan. For shorter-terms loans offered</p>
      
        <p><button className="button" style={{marginTop:"7%"}}>Contact</button></p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="push">
      <img src={p1}  alt="John"/>
      <div className="container">
        <h2 style={{fontSize:"25px",marginTop:"2%",color:"red"}}>Our Mission</h2>
      
        <p style={{marginTop:"4%"}}>As a Finance we are established with the experience of many years and expertise in finance and finance related works.Our company is a growing financial services company in consumer lending, asset reconstruction and capital markets. We provide high level reliable lending and financial solutions to our customers.

Our Bank Partners




Our Products</p>
   
        <p><button className="button" style={{marginTop:"4%"}}>Contact</button></p>
      </div>
    </div>
  </div>
</div>


    </div>
  )
}

export default About