import React from 'react'
// import "./style.css";

const Register = () => {
  return (
    <div>
<div className='test'background='linear-gradient(90deg,#4b6cb7 0%,#182848 100%)'>
    <form>
        <div className='main'>
            <div className='reg'>
                <h2>Register</h2>
                <div className='typ'>
                    <input type="text" placeholder=" Enter your First Name" /><br></br>
                    <input type="text" placeholder=" Enter your Last Name" /><br></br>
                </div>
                <div className='nam'>
                
                </div>
                <div className='man'>
                <input type="text" placeholder=' Enter your email ' /><br></br>
                <input type="text" placeholder='Enter your Password' /><br></br>
                    <input type="password" placeholder='Confirm  your Password' />
                </div>
        
    
        <div className='btn'>
        <div className='btn1'>
        {/* <Link to="/Login"> */}
                    <button>Register</button>
                    {/* </Link> */}
                </div>
                <div className='btn2'>
                {/* <Link to="/Login"> */}
                    <button>Already have an account <span className='print'>/Sign In</span></button>
                    {/* </Link> */}
                </div>
                </div>
                </div>
                </div>
        </form>
    </div>
  
</div>
  )
}


export default Register