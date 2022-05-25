import React,{useState} from 'react'
import './Login.css'
import Registration from './Registration.js';
function Login() {
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
            <button type="submit">Login</button><br></br>
            {/* <button  type="submit"className='wix'>Sign Up</button> */}
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
   <Registration />
       </div>
       </>
         
      

    );
};
export default Login;