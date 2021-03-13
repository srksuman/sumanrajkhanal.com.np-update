import React from 'react';
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-scroll";

 const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark container-fluid ">
<div className="container">

     
        <Link  className="navbar-brand display-3 pointing" to="header" spy={true} smooth={true} offset={-50} duration={500}>
        S.R.<span className="khanal">Khanal</span>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          {/* <span className="navbar-toggler-icon"></span> */}
          <FontAwesomeIcon icon={faBars} style={{color:"white"}}/>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">


            <Link activeClass="active" className="nav-link" to="header" spy={true} smooth={true} offset={-50} duration={500}>
            Home <span className="sr-only">(current)</span>
        </Link>
            </li>
            <li className="nav-item">

            <Link  className="nav-link" to="about" spy={true} smooth={true} offset={-125} duration={500}>
            About 
        </Link>

            </li> 

            <li className="nav-item">

            <Link  className="nav-link" to="edu" spy={true} smooth={true} offset={-83} duration={500}>
            education 
        </Link>

             
            </li> 

            <li className="nav-item">

<Link className="nav-link" to="skills" spy={true} smooth={true} offset={-83} duration={500}>
skills
</Link>

            </li> 

            <li className="nav-item">

<Link className="nav-link" to="contact" spy={true} smooth={true} offset={-83} duration={500}>
contact
</Link>

            </li> 
          </ul>
          
</div>


        </div>

        
      </nav>
    )
}
export default NavBar;

