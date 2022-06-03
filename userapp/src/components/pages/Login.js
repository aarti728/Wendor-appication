import React from 'react'
// import "./style.css";
import { useState } from 'react';
const Login = () => {
         const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

    const [allNewEntry,setNewEntry]=useState([]);

    const onemailChange = (e) =>{
        setEmail(e.target.value)
        
    }

    const onpasswordChange = (e)=>{
        setPassword(e.target.value)

    }
    const onsubmitFrom=(e)=>{
        e.preventDefault();
        const newEntry ={email:email,password:password};
        setNewEntry([...allNewEntry,newEntry]);
        console.log(allNewEntry);

        setEmail("");
        setPassword("");

    }
    return (
        <>
         <div className ="login">
         <div className ="form">
         <form action=""onSubmit={onsubmitFrom} className='login-form'>
            <span className='material-icons'>lock</span>
            <input type="text" placeholder='Email' value={email} onChange={onemailChange}/>
            <input type="password" placeholder='Password'  value={password} onChange={onpasswordChange}/>
            <div className='one'>
            {/* <Link to="/Login"> */}
            <button type="submit">Login</button><br></br>
            {/* </Link> */}
            </div>
            <div className='user'>
            {/* <Link to="/registration"> */}
            <button  type="submit">Sign Up</button>
            {/* </Link> */}
            </div>
            
         </form>

         </div>
         </div>
       <div>
   {allNewEntry.map((ele)=>{
       return(

       <div>
           <p>{ele.email}</p>
           <p>{ele.password}</p>

       </div>
       )
   })}



    </div>
    </>
  )
}

export default Login