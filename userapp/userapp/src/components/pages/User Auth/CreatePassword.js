import React,{useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

export default function CreatePassword() {
    let navigate = useNavigate()    
let [password, setPassword] = useState("")
const [searchParams, setSearchParams] = useSearchParams("");
function getData(e){
    setPassword(e.target.value);
}
const submit = async () =>{
    try{
        let response = await axios.post("https://loanprojectapi.herokuapp.com/api/create/password",{mobile:searchParams.get("mobile"),otp:searchParams.get("otp"), password:password});
        if(response.data.success){
            navigate(`/login`)
        }else{
            console.log("wrong password")
        }
    console.log(response,"user verify response");
    } catch (err){
        console.log("verify error", err);
    };
}
  return (
    <>
    <h1 className='text-center text-danger font-family-cursive'>Create Password</h1>
    <div className="main">
    <div className="center">
        <input type="text" className='form-control mt-6 ' placeholder='enter your Password' name='Password'></input>
       
        <input type="text"  className='form-control mt-4' placeholder='Confirm your Password' name='Cpassword' onChange={getData} ></input>
        <div className='d-flex justify-content-center'>
        <button onClick={submit} className='btn mt-3 text-align-center btn-outline-primary d-flex'>Submit</button>
        </div>
        </div>
        </div>

    </>
  )
}
