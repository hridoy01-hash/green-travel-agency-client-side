import React from 'react';
import { Container,Button } from 'react-bootstrap';
import './Subscribe.css'
const Subscribe = () => {
    return (
        <div>
            <Container>
            <p className="text-center text-success mt-5 ">Stay With Us?<hr /></p>
           <h3 className="text-center text-muted mb-5"> <span className="fw-bold text-danger" style={{fontSize:"30px"}}>Subscribe &</span> Get's More Offer</h3>
            </Container>
            <div className="subscribe">
            <div className="iteam text-center ">
            <i className="airplan fas fa-plane-departure"></i>
            <h4>Hot Deals. Awesome Chat. Straight to Your Inbox</h4>
            <input placeholder="Your Name " type="text" className="ip2 mt-5"/>
            <input placeholder="Your Email" type="text" className="ip2"/> <br />
            <Button className="fw-bold text-center mt-3" variant="outline-dark">Lets Us <i className="fas fa-paper-plane"></i></Button>
            </div>

            </div>
        </div>
    );
};

export default Subscribe;