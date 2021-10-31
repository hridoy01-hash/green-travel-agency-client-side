import React from 'react';
import {Button, Container} from 'react-bootstrap';
import about from '../../images/advriest.jpg'
const About = () => {
    return (
        <div>
            <Container className="mt-5 mb-5">
            <div className="row">
                <div className="col-md-7 ">
                     <h3 className="text-primary">Our Story</h3>
                     <p>The narrator isn't describing a static place but a world in motion. Or the image compels your eyes to move all over, rendering the story through the interplay of subject and background. And this movement isn't limited to physical movement, but a sense of temporality, or time itself moving.</p>
                     <br />
                     <h3 className="text-primary">Why Choose Us</h3>
                     <p> <ul className="text-danger">
                         <li>BOOKING WITH SPREAD PAYMENTS</li>
                         <li>SLEEP & TRAVEL IN COMFORT</li>
                         <li>FULLY LICENSED TOUR OPERATOR</li>
                         <li>Always more discoutn and Offer</li>
                         </ul> </p>
                     <br />
                     <h3 className="text-primary">What Our Commitment </h3>
                     <p>Since 2014, we’ve helped more than 500,000 people of all ages enjoy the best outdoor experience of their lives. Whether it’s for one day or a two-week vacation, close to home or a foreign land and something like that.
                    </p>
                    <Button variant="outline-success">See More About</Button>

                </div>
                <div className="col-md-5 ">

                 <img style={{width:"550px",height:"450px"}} src={about} alt="" />

                </div>
            </div>
            </Container>
        </div>
    );
};

export default About;