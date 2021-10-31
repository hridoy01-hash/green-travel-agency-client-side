import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card,Button, Container} from 'react-bootstrap';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import './Booking.css'
import useAuth from '../../hooks/useAuth';
import swal from 'sweetalert';

const Booking = () => {
    const {id} = useParams();
    const [booked,setBooked]= useState({})
    useEffect(()=>{
        fetch(`https://stark-plateau-94648.herokuapp.com/booking/${id}`)
        .then(res=>res.json())
        .then(result=>setBooked(result))
    },[]);
    

    const {user} = useAuth();

    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        
        const {name,email,number,address} = data;
        const newOrder = {name,email,number,address,booked}
        newOrder.status = 'pendening'

        /* const order = booked
        order.email = user.email;
        order.userinfo = data;  */
        fetch('https://stark-plateau-94648.herokuapp.com/orders',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newOrder)
        })
        .then(res =>res.json())
        .then(result =>{

            if(result.insertedId){
                swal({
                    title: "Good job!",
                    text: "Your Booked Successfully!",
                    icon: "success",
                    button: "Aww yiss!",
                  });
                reset(); 
            }
            
        })  
        
    }
    

    return (
        <div className="mt-5 mb-5 booking">
            <Container>

                <div className="row">
                
                    <div className="col-md-6 text-center">
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
                    <div className="col-md-6 text-center">
                    <p className="text-center text-muted ">GET FASTED DELIVARY? <hr /></p>
    <h3 className="text-center text-muted mb-5"> <span className="fw-bold text-danger" style={{fontSize:"30px"}}>Provide Your Information</span> </h3>
    <form  onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} defaultValue={user.displayName}/>
      <input {...register("email")} defaultValue={user.email} />
      <input type="number" {...register("number",{ required: true })} required placeholder="Enter Phone Number" />
      <input {...register("address",{ required: true })} required placeholder="Enter Address"/>
      <input  className="btn btn-success" type="submit" value="Confirm Booked" />
    </form>

                         
                    </div>
                </div>
        
            </Container>
        </div>
    );
};

export default Booking;