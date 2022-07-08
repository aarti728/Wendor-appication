import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

export default function OTPVerification() {
let navigate = useNavigate()    
let [otp, setOtp] = useState("")
const [searchParams, setSearchParams] = useSearchParams();
function getData(e){
    setOtp(e.target.value);
}

const verify = async () =>{
    try{
        let response = await axios.post("https://loanprojectapi.herokuapp.com/api/verify/otp",{mobile:searchParams.get("mobile"), otp:otp});
        if(response.data.success){
            navigate(`/createpass?mobile=${searchParams.get("mobile")}&otp=${otp}`);
        
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
    <h1 className='text-center text-primary'>OTP Verification</h1>
     <div className='main'>
      <div className='center'>
        <input type ="text" className='form-control mt-4' placeholder='enter your otp' name='OTP' onChange={getData}></input>
        <div className='d-flex justify-content-center'>
        <button onClick={verify} className='btn mt-3 btn-primary'>Verify</button>
        </div>
        </div>  
        </div> 
    </>
  )
}
