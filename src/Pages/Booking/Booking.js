import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card,Button, Container} from 'react-bootstrap';
import { useParams } from 'react-router';

const Booking = () => {
    const {id} = useParams();
    const [booked,setBooked]= useState({})
    useEffect(()=>{
        fetch(`http://localhost:5000/booking/${id}`)
        .then(res=>res.json())
        .then(result=>setBooked(result))
    },[])
    return (
        <div>
            <Container className="text-center">
         <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" style={{height:'180px'}} src={booked.img} />
  <Card.Body>
    <Card.Title>Make Your Happiness <span className="text-danger fw-bold">{booked.name}</span></Card.Title>
    <Card.Text>
     {booked.description?.slice(0,190)}
    </Card.Text>
    <Button variant="primary">Confirm Order</Button>
  </Card.Body>
</Card>
</Container>
        </div>
    );
};

export default Booking;