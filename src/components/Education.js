import React from 'react';
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSchool} from "@fortawesome/free-solid-svg-icons";
const Education = () => {
    return (
      <div className="container-fluid experience mt-5  d-flex" id="edu">
          <div className="container">
              <div className="row ">
                  <h2 className="mt-4 text-uppercase text-black text-center  mb-5  offset-md-5 offset-md-4 offset-3 border-bottom border-success font-weight-bold ">Education</h2>
              </div>
              <div className="row">
                  <div className="col-lg-5  col-md-4">
                  <h6 className="schooling">MANAKAMANA HIGHER SECONDARY SCHOOL</h6> 
                  <p className="font-weight-bolder">SCHOOLING</p>
                  </div>
                  <div className="col-lg-1 col-md-2">
                </div>
                <div className="line"></div>
                <div className="col-1">
                </div>
                <div className="col-lg-4  col-md-4 mt-5 "><h6 className="plus2">MORGAN INTERNATIONAL COLLEGE <span className="p2">2017 - 2019</span></h6>
                <p className="font-weight-bolder">+2 COMPUTER SCIENCE
</p>
                 </div>
              </div>


<div className="row">
<div className="line line2 offset-6"></div>
<FontAwesomeIcon icon={faSchool} size={70} className="book " size="3x" style={{color:"lightgreen"}}/>
{/* <div className="col-1 " >
       
    </div> */}
    <div className="col-lg-5 col-md-4  higherstudy " >
        <div>
        <h6 className="clogname  mt-5 text-uppercase">University of Wolverhampton<br/><span className="p2">2019 - 2022</span></h6>
        <p className="font-weight-bolder">B.Sc. (Hons.) in Computer Science <br/>Project Work: Pending
</p>
        </div>
    </div>
</div>

          </div>
      </div>
    )
}

export default Education;
