import React from "react";
import logo from '../first.jpg';
const About = () =>{
    return (
        <div className="container mt-5">
            <div className="row">
            <h2 className="text-uppercase text-black text-center  mb-5  offset-md-5 offset-3 border-bottom border-success font-weight-bold">About Me</h2>  
            </div>
            <div className="row">
           
<div className="col-xl-5 text-primary font-weight-bold text-justify col-lg-12  ">
<img src={logo} alt="Suman Raj Khanal" className="img-thumbnail "/>

</div>


<div className="col-xl-5 offset-xl-2  col-lg-12">
<p className="text-justify font-smaller font-weight-bolder ">
<h3 className="font-weight-bold display-4">Hello! </h3>
 I'm Suman Raj Khanal. Programming have always been topic of fascination for me.
Over the years, I have tried to gain decent knowledge on programming language and got success on Java, Python, C, C# and C++.I foresee part of my future embedded to them. I’m glad I could use my programming knowledge for fulfilling my goals.  
</p>

</div>
            </div>
        </div>
    )
}

export default About;