import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

export default function MobileVerification() {
let navigate = useNavigate()    
let [mobile, setMobile] = useState("")
const [searchParams, setSearchParams] = useSearchParams();
function getData(e){
    setMobile(e.target.value);
}

const verify = async () =>{
    try{
        let response = await axios.post("https://loanprojectapi.herokuapp.com/api/forgot",{mobile:mobile});
        if(response.data.success){
            navigate(`/newotpVerification?mobile=${mobile}`)
        }else{
            console.log("wrong otp")
        }
    console.log(response,"user verify response");
    } catch (err){
        console.log("verify error", err);
    };
}


  return (
    <div>
        <h1 className='text-center text-primary'>Mobile Number Verification</h1>
     <div className='main'>
      <div className='center'>
        <input type ="text" className='form-control mt-4' placeholder='enter your register mobile number' name='mobile' onChange={getData}></input>
        <div className='d-flex justify-content-center'>
        <button onClick={verify} className='btn mt-3 btn-primary'>Verify</button>
        </div>
        </div>  
        </div> 
    </div>
  )
}
