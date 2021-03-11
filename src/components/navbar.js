import React from 'react';
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

 const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark container-fluid ">
<div className="container">

        <a className="navbar-brand display-3" href="#">S.R.<span className="khanal">Khanal</span></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          {/* <span className="navbar-toggler-icon"></span> */}
          <FontAwesomeIcon icon={faBars} style={{color:"white"}}/>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">about</a>
            </li> 

            <li className="nav-item">
              <a className="nav-link " href="#">experience</a>
            </li> 

            <li className="nav-item">
              <a className="nav-link " href="#">education</a>
            </li> 

            <li className="nav-item">
              <a className="nav-link " href="#">skills</a>
            </li> 

            <li className="nav-item">
              <a className="nav-link " href="#">interest</a>
            </li> 

          </ul>
          
</div>
        </div>
      </nav>
    )
}
export default NavBar;

