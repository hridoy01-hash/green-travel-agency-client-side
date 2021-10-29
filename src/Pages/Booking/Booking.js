import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card,Button, Container} from 'react-bootstrap';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import './Booking.css'
import useAuth from '../../hooks/useAuth';

const Booking = () => {
    const {id} = useParams();
    const [booked,setBooked]= useState({})
    useEffect(()=>{
        fetch(`http://localhost:5000/booking/${id}`)
        .then(res=>res.json())
        .then(result=>setBooked(result))
    },[]);
    

    const {user} = useAuth();

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const order = booked
        order.email = user.email;
        order.userinfo = data; 
        fetch('http://localhost:5000/orders',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(order)
        })
        .then()  
        
    }
    

    return (
        <div className="mt-5 mb-5 booking">
            <Container className="text-center">

                <div className="row">
                
                    <div className="col-md-6">
                    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" style={{height:'180px'}} src={booked.img} />
  <Card.Body>
    <Card.Title>Make Your Happiness <span className="text-danger fw-bold">{booked.name}</span></Card.Title>
    <Card.Text>
     {booked.description?.slice(0,190)}
    </Card.Text>
    <Button variant="primary">Find More</Button>
  </Card.Body>
</Card>
                    </div>
                    <div className="col-md-6">
    <form  onSubmit={handleSubmit(onSubmit)}>
      <input {...register("Name")} defaultValue={user.displayName}/>
      <input {...register("email")} defaultValue={user.email} />
      <input type="number" {...register("phoneNumber")} placeholder="Enter Phone Number" />
      <input {...register("address")} placeholder="Enter Address"/>
      <input  className="btn btn-success" type="submit" />
    </form>

                         
                    </div>
                </div>
        
            </Container>
        </div>
    );
};

export default Booking;