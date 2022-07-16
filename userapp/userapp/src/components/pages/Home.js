import React,{useState,useEffect} from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Button } from "@mui/material";
import "./style.css";
import { Link } from "react-router-dom";
import TemporaryDrawer from "./Drawer.js";
import axios from 'axios';




export default function MenuAppBar(props) {

  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [user, setUser] = React.useState({});
  const [loan,setLoan]=   useState([]);
  


  

  


  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const userToken = localStorage.getItem("userToken");
  console.log(userToken);

  function deleteItem(){
    // localStorage.removeItem("userToken");
    localStorage.clear();
  }
  //    toast.configure();
  //  const handleMessage=()=>{
  //   toast("Login Successfully")
  //  }

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


  const Home  = async () => {
    try {
      let config = {
        headers: {
          "x-access-token": localStorage.getItem("userToken"),
        },
      };
      let response = await axios.get(
        " https://loanprojectapi.herokuapp.com/api/admin/loan/60332be698bd143d94f8ea99",
        config
      );

      if (response.data.success) {
		setUser(response.data.data)
      } else {
      }
      console.log("fetch data");
      console.log(response, "user data response");
    } catch (err) {
      console.log("fetch error", err);
    }
  };

  useEffect(()=>{
    Home();
  },[])


 
  const Calculator = async () => {
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
		setUser(response.data.data)
      } else {
      }
      console.log("fetch data");
      console.log(response, "user data response");
    } catch (err) {
      console.log("fetch error", err);
    }
  };




  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" style={{backgroundColor:"purple"}}>
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            // {onClick={toggleDrawer} } 
            >
           
            <MenuIcon />
            <TemporaryDrawer />
           </IconButton>  */}

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {userToken ? (
              <div>
              <Link to='/login' style={{color:"white",textDecoration:"none"}}>
              <h1  className="test">Fast Loan</h1>
              </Link>              
              </div>              
            ):(
              <div className="aaru">
                <Link to="/login" style={{textDecoration:"none"}}>
                  <Button color="inherit"  >Login</Button>
                
                </Link>
                   <Link to="/register">
                  <Button color="inherit">Sign Up</Button>
                </Link>
               
              </div>
                )}

          </Typography>
          {userToken && (
            <div>
              <div className="temp">
              <Link to='/about' style={{color:"white",textDecoration:"none",marginTop:"1.3%"}}>
                <p>About Us</p>
                </Link>
                <Link to='/contact' style={{color:"white",textDecoration:"none",marginTop:"1.3%"}}>
                <p>Contact Us</p>
                </Link>
                {/* <Link to='/emi' style={{color:"white",textDecoration:"none",marginTop:"1.3%"}}> */}
                <p onClick={Calculator}>Emi Calculator</p>
                {/* </Link> */}
                <div class="dropdown">
                <Link to='/loanDetails'>
  <button class="dropbtn" >Our Products</button>
  </Link>
  <div class="dropdown-content">
  {
    loan.map(data=>(
      <a href="#" onClick={Home}>{data.name}</a>
    ))
  }
   
    {/* <a href="#" onClick={Education}>Education Loan</a>
    <a href="#" onClick={Business}>Business Loan</a>
    <a href="#" onClick={Personal}>Personal Loan</a> */}
  </div>
</div>
              </div>
            </div>
          )}
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
              <Link to='/profile'>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                </Link>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                {/* <MenuItem onClick="deleteItem()">Logout</MenuItem> */}
                <Link to='/login'>
                <button onClick={deleteItem} style={{border:"none",background:"transparent",padding:"0% 15%"}}>Logout</button>
                </Link>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

