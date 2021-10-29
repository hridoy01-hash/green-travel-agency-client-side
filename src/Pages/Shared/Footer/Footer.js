import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer">
            <Container className="mt-5 mb-5">
            <div className="row">
                <div className="col-md-4 text-white">
                    <h4>About Us</h4>
                    <p className="text-align-justify">The best and most professional medical website templates for a quick and reliable launch of a physician, doctor, dentist, clinic, hospital and any other are provided here.</p>
                    
                </div>
                <div className="col-md-2 text-white ms-5">
                  <h5>TOUR <i className="fas fa-car-side"></i></h5>
                  
                    <p><i className="fas fa-fighter-jet"></i> Thailand</p>
                    <p><i className="fas fa-fighter-jet"></i> Vietnam</p>
                    <p><i className="fas fa-fighter-jet"></i> Camobia</p>
                    <p><i className="fas fa-fighter-jet"></i> Korea</p>
                    <p><i className="fas fa-fighter-jet"></i> Swizerland</p>
                 
                </div>
                <div className="col-md-2 text-white ms-5">
                <h5>SUPPORT <i className="fas fa-envelope"></i></h5>
                  
                  <p><i className="fas fa-arrow-right"></i> Account</p>
                  <p><i className="fas fa-arrow-right"></i> Legal</p>
                  <p><i className="fas fa-arrow-right"></i> Contact</p>
                  <p><i className="fas fa-arrow-right"></i> Term & policy</p>


                </div>
                <div className="col-md-2 text-white ms-5">
                <h5>USEFUL PAGES <i className="fas fa-mouse-pointer"></i></h5>
                  
                  <p><i className="fas fa-street-view"></i> Contact No.+123 456 7890</p>
                  <p><i className="fas fa-street-view"></i> Our Experts Doctors</p>
                  <p><i className="fas fa-street-view"></i> Email ID:info@example.com</p>
                  <p><i className="fas fa-street-view"></i>Dhanmondi,Dhaka-1216</p>
                  Follow Us <i className="fab fa-twitter"></i> <i className="fab fa-google-plus-g"></i> <i className="fab fa-facebook-square"></i>
                </div>
            </div>
           </Container> 
           <div className="text-center text-white">
               
               <p>© Copyright 2021 | Designed By <span style={{color:"red"}}>Hridoy Ahmed</span> | All Rights Reserved</p> 
              
           </div>
           
        </div>
    );
};

export default Footer;