import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import "./profile.css";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';

   

const handleProfile=()=>{
  toast("Updated Successfully")
 }
const Profile = () => {
  var [user, setuser] = useState({});
  

  let navigate = useNavigate();

function getData(e) {
    var name = e.target.name;
    var value = e.target.value;
    setuser((oldData) => {
      return {
        ...oldData,
        [name]: value,
      };
    });
  }
  const Submit = async () => {
    try {
      let response = await axios.get(
        "https://loanprojectapi.herokuapp.com/api/profile",
        
        user
      );

      if (response.data.success) {
        localStorage.setItem("newToken", response.data.token);
        navigate(`/`);
      } else {
      }
      console.log("unable to login");
      console.log(response, "user login response");
    } catch (err) {
      console.log("login error", err);
    }
  };


  const getPofileDetails = async () => {
    try {
    
      let config = {
        headers: {
          "x-access-token": localStorage.getItem("userToken"),
        },
      };
      let response = await axios.get(
        "https://loanprojectapi.herokuapp.com/api/profile",
        config
      );

      if (response.data.success) {
		  setuser(response.data.data)
      } else {
      }
      console.log("fetch data");
      console.log(response, "user data response");
    } catch (err) {
      console.log("fetch error", err);
    }
  };

  useEffect(() => {
    getPofileDetails();
  }, []);


  const updateProfile = async () => {
    
    try {
      let config = {
        headers: {
          "x-access-token": localStorage.getItem("userToken"),
        },
      };
	  
      let response = await axios.put(
        "https://loanprojectapi.herokuapp.com/api/profile",
		user,
		config
        
      );
      if (response.data.success) {
		// setuser(response.data.data)
      } else {
      }
      console.log("fetch  updated data");
	  
      console.log(response, "user  updated data response");
    } catch (err) {
      console.log("fetch error", err);
    }
  };

  return (
	<>

 <div className="container" style={{marginLeft:"5%"}}>
      <div className="row gutters">
        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
          <div className="card h-100" style={{marginLeft:"-95%"}}>
            <div className="card-body">
              <div clasNames="account-settings">
                <div className="user-profile">
                  <div className="user-avatar">
                    <img
                      src="https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg"
                      style={{ height: "26vh", width: "15vw",marginLeft:"-10%"}}
                      alt="Maxwell Admin"
                    />
                  </div>
                  <h5
                    className="user-name"
                    style={{
                      marginTop: "3%",
                      fontFamily: "Times New Roman",
                      color: "red",
                      fontSize: "28px",
                      marginLeft: "8%",
                    }}
                  >
                    Loan
                  </h5>
                  <h6 className="user-email">
                    Reference site about Lorem Ipsum
                  </h6>
                </div>
                <div className="about">
                  <h3
                    text-primary
                    style={{
                      marginTop: "3",
                      fontFamily: "Times New Roman",
                      color: "blue",
                      fontSize: "28px",
                      marginLeft: "5%",
                    }}
                  >
                    Loan Project
                  </h3>
                  <h>Welcome..!!!! Our Website Loan Project</h>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
          <div class="card h-100">
            <div clasName="card-body">
              <div className="row gutters">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <h6
                    className="mb-2 text-primary"
                    style={{
                      fontSize: "35px",
                      fontFamily: "Lobster",
                      textDecoration: "underline",
                    }}
                  >
                    Personal Details
                  </h6>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label
                      for="fullName"
                      style={{
                        fontWeight: "bold",
                        fontSize: "18px",
                        marginTop: "15%",
                        fontFamily: "monospace",
                        marginLeft: "-30%",
                      }}
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="fullName"
                      name="firstName"
                      placeholder="Enter your First Name"
                      style={{ marginTop: "5%" }}
                      onChange={getData}
					            defaultValue={user ? user.firstName : null}
                     
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label
                      for="fullName"
                      style={{
                        fontWeight: "bold",
                        fontSize: "18px",
                        marginTop: "15%",
                        fontFamily: "monospace",
                        marginLeft: "-30%",
                      }}
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="fullName"
                      name="lastName"
                      placeholder="Enter your Last Name"
                      style={{ marginTop: "5%" }}
                      onChange={getData}
					            defaultValue={user? user.lastName : null}
					
                    />
                  </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div class="form-group">
                    <label
                      for="eMail"
                      style={{
                        fontWeight: "bold",
                        fontSize: "18px",
                        marginTop: "5%",
                        fontFamily: "monospace",
                        marginLeft: "-30%",
                        
                      }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="eMail"
                      placeholder="Enter  your email ID"
                      name="email"
                      style={{ marginTop: "5%" }}
                      onChange={getData}
					         defaultValue={user ? user.email :null}
					
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label
                      for="phone"
                      style={{
                        fontWeight: "bold",
                        fontSize: "18px",
                        marginTop: "5%",
                        fontFamily: "monospace",
                        // marginLeft: "5%",
                        marginLeft: "-30%",
                      }}
                    >
                      Mobile
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      placeholder="Enter your Mobile number"
                      name="email"
                      style={{ marginTop: "5%" }}
                      onChange={getData}
					           defaultValue={user ? user.mobile:null}
					
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label
                      for="ciTy"
                      style={{
                        fontWeight: "bold",
                        fontSize: "18px",
                        marginTop: "5%",
                        fontFamily: "monospace",
                        marginLeft: "-40%",
                      }}
                    >
                      City
                    </label>
                    <input
                      type="name"
                      className="form-control"
                      id="ciTy"
                      placeholder="Enter City"
                      name="city"
                      style={{ marginTop: "5%" }}
                      onChange={getData}
					          defaultValue={user? user.city:null}
					
                    />
                  </div>
                </div>
              </div>
              <div class="row gutters">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div
                    class="text-right"
                    style={{ float: "right", marginTop: "4%", padding: "20px" }}
                  >
                    <button
                      type="button"
                      id="submit"
                      name="submit"
                      className="btn btn-danger"
                      style={{
                        marginTop: "8%",
                        height: "6vh",
                        width: "9vw",
                        paddingLeft: "2%",
                        marginRight: "15px",
                      }}
                    >
                      Cancel
                    </button>
                    <Link to='/profile' >
                   
                    <button
                      type="button"
                      id="submit"
                      name="submit"
                      className="btn btn-primary"
                      style={{ marginTop: "8%", height: "6vh", width: "9vw" }}
                      onClick={updateProfile }
                      onDoubleClick={handleProfile}
                      
                    >
                      Submit
                    </button>
                    <ToastContainer/>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
	</>
  );
};
export default Profile;
