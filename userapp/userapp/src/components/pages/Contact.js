import React from 'react'

const Contact = () => {
  return (
    <div style={{boxShadow: "5px 5px 8px #888888",height:"70vh",width:"70vw",marginLeft:"15%",marginTop:"5%"}}>

<section class="mb-4" >

    <h2 class="h1-responsive font-weight-bold text-center my-4" style={{marginRight:"15%",color:"purple"}}>Contact us</h2>
    
    <h2 class="w-responsive " style={{fontSize:"25px",marginRight:"10%" ,marginTop:"-1%"}}>Feel Free To Contact Any Query
      </h2>

    <div class="row" style={{marginTop:"4%"}}>

      
        <div class="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

               
                <div class="row">

                   
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="name" name="name"  class="form-control"/> 
                            <label for="name" class="">Your name</label>
                        </div>
                    </div>
                   
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="email" name="email" class="form-control"/>
                            <label for="email" class="">Your email</label>
                        </div>
                    </div>
              

                </div>
              
                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                            <input type="text" id="subject" name="subject" class="form-control"/>
                            <label for="subject" class="" style={{marginLeft:"25%"}}>Subject</label>
                        </div>
                    </div>
                </div>
               
                <div class="row">

                 
                    <div class="col-md-12">

                        <div class="md-form">
                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea" /><br/>
                            <label for="message" style={{marginLeft:"15%"}}>Your message</label>
                        </div>

                    </div>
                </div>
               

            </form>

            <div class="text-center text-md-left" >
                <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();" style={{width:"13vw",marginTop:"1%"}}>Send</a>
            </div>
            <div class="status"></div>
        </div>
  
       
        <div class="col-md-3 text-center" style={{ height:"50vh",marginTop:"-13%"}}>
            <ul class="list-unstyled mb-0">
              
                <li><i class="fa fa-map-marker fa-4x" aria-hidden="true"  style={{color:"#34A853"}}></i>
                    <p>#53, 2nd floor, Kempegowda Double Road, BEML Layout 5th Stage Rajarajeshwari Nagar Bangalore – 560098 Karnataka, INDIA</p>
                </li>

                <li><i class="fa fa-phone mt-4 fa-3x " style={{color:"#4285f4"}}></i>
                    <p>+91 (80) 47091438</p>
                </li>

                <li><i class="fa fa-envelope mt-4 fa-3x" style={{color:"#EA4335"}}></i>
                    <p>info@123@gmail.com</p>
                </li>
            </ul>
        </div>
        </div>
       

  

</section>

    </div>
  )
}

export default Contact