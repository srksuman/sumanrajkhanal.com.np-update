import React from 'react'
import logo from './white.png';
const Contact = () => {
    return (
        <div className="container mt-5" id="contact">
          <div className="row">
            <h2 className="mt-4 text-uppercase text-black text-center  mb-5  offset-md-5 offset-md-4 offset-3 border-bottom border-success font-weight-bold ">Contact</h2>
                </div>
            <div className="row">
               <div className="col-lg-6 col-12 bg-light border-radius rounded-sm">        
<div class="elfsight-app-1c609ed8-0bed-4fec-b814-6d552979f7d8" onClick={(e)=>{e.preventDefault()}} style={{zIndex:"99999999 !important"}}>
</div>
               </div> 

<div className="col-lg-5 offset-1">
   <h1 className=" display-6 font-weight-bold text-sm-center"><i class="fas fa-street-view fa-1x"></i>Location</h1>
   <h5 className=" font-weight-bolder text-sm-center">Suman Raj Khanal</h5>
   <hr/>
   <h5 className=" font-weight-bolder text-sm-center">Kathmandu-44600,Nepal</h5>
   <hr/>
   <h5 className="font-weight-bolder text-sm-center"><i class="fas fa-phone-square"></i>(+977)9803955983</h5>
   <hr/>
   <h5 className="font-weight-bolder text-sm-center"><i class="fab fa-instagram"></i> sumanraj.khanal</h5>
   <hr/>
   <h5 className=" font-weight-bolder text-sm-center"><i class="fab fa-telegram-plane"></i>    @NPsrk</h5>
   <hr/>
   <h5 className=" font-weight-bolder text-sm-center">  sumanrajkhanal@gmail.com</h5>
   <hr/>
   
</div>

            </div>

            {/* <div className="row white">
        <img src={logo} className="white-paper" alt="white"/>
    </div> */}
        </div>
    )
}

export default Contact
