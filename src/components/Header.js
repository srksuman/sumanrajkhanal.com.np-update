import React from 'react';
import Typed from 'react-typed';
import {Link} from "react-scroll";
const Header =()=>{
    return(
       <div className="main-header-wrapper" id="header">
           <div className="main-info">
               <h2>Destiny Never Lies Within Vision, <br/> Dream Never Lies Within Imagination</h2>
               <h3>Hello! I am</h3>
           <Typed 
           className="auto-typing"
           strings={["Suman Raj Khanal.","Programmer.","Writer.","Developer."]}
           backSpeed={100}
           typeSpeed={400}
           loop
           /> 
           <Link className="btn btn-outline-success"  to="contact" spy={true} smooth={true} offset={-83} duration={500}>
contact
</Link>
           </div>
           
       </div>
    )
}
export default Header;