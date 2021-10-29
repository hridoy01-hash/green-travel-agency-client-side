import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services,setServices]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/booking')
        .then(res=>res.json())
        .then(result =>setServices(result))
    },[]) 
    return (
        <div>
         <Container className="mt-5">
         <p className="text-center text-success mt-3 ">VIEW ALL DEALS <hr /></p>
          <h3 className="text-center text-muted mb-5"> <span className="fw-bold text-danger" style={{fontSize:"30px"}}>Where Do You Want to</span> Travel?</h3>
            <Row xs={1} md={3} className="g-4">
            {
                services.map(service=><Service service={service} key={services.travelId} ></Service>)
            }

           </Row>
           </Container>
           
           
           
           
           
           
        </div>
    );
};

export default Services;