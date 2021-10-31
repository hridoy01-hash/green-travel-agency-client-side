import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Service from '../Service/Service';

const Services = () => {
    const [services,setServices]=useState([])
    useEffect(()=>{
        fetch('https://stark-plateau-94648.herokuapp.com/booking')
        .then(res=>res.json())
        .then(result =>setServices(result))
    },[]);
    const {isLoading} = useAuth();
    if(isLoading){
        return <Spinner animation="border" variant="danger" />
      }
    return (
        <div>
         <Container className="mt-5">
         <p className="text-center text-success mt-3 ">VIEW ALL DEALS <hr /></p>
          <h3 className="text-center text-muted mb-5"> <span className="fw-bold text-danger" style={{fontSize:"30px",fontFamily:'cursive'}}>Where Do You Want to</span> Travel?</h3>
            <Row xs={1} md={3} className="g-4">
            {
                services.map((service,index)=><Service service={service} key={services._id} ></Service>)
            }

           </Row>
           </Container>
           
           
           
           
           
           
        </div>
    );
};

export default Services;