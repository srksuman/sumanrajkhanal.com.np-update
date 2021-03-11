import React from 'react';
import Typed from 'react-typed';
const Header =()=>{
    return(
       <div className="main-header-wrapper">
           <div className="main-info">
               <h2>Destiny Never Lies Within Vision, <br/> Dream Never Lies Within Imagination</h2>
               <h3>Hello! I am</h3>
           <Typed 
           className="auto-typing"
           strings={["Suman Raj Khanal.","Programmer.","Writer."]}
           backSpeed={100}
           typeSpeed={400}
           loop
           /> 
           <a href="#" className="btn btn-outline-success">Contact Me</a>
           </div>
           
       </div>
    )
}
export default Header;