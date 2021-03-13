import React from 'react'

const Footer = () => {
    return (
        <div className="container-fluid bg-dark mt-5 d-flex">
            <div className="container m-5">
               
                <div className="row">
                    <div className="col-11 offset-xl-2 text-white  text-center font-weight-bolder">
                    <a href="https://twitter.com/SumanRajKhanal1" target="_blank"><i class="fab fa-twitter"></i></a>
                    <a href="https://mail.google.com/mail/u/1/#inbox" target="_blank"><i class="fab fa-google"></i></a>
                    <a href="https://www.linkedin.com/in/suman-raj-khanal-87330b1b4/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                    <a href="https://www.instagram.com/sumanraj.khanal/" target="_blank"><i class="fab fa-instagram"></i></a>
                    <h6 className="p-2 ml-4"> Copyright &copy; 2021</h6>
                    <h6>All Right Reserved Suman Raj Khanal</h6>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default Footer
