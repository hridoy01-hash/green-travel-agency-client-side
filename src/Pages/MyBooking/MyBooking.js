import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import MyOrderTable from '../MyOrderTable/MyOrderTable';

const MyBooking = () => {
    const [orders,setOrder] = useState([])
    const {user} = useAuth();
    const email = user.email
    useEffect(()=>{
        fetch(`https://stark-plateau-94648.herokuapp.com/orders/${email}`)
        .then(res => res.json())
        .then(result => setOrder(result))
        
    },[email,orders]);

    
    
    return (
        <div>
            <Container>
            <h3 className="text-center text-muted mb-5 mt-3"> <span className="fw-bold text-danger" style={{fontSize:"30px"}}>My Order </span> DashBoard</h3>
           
            {
                orders.map(order => <MyOrderTable order={order} key={order._id}></MyOrderTable>)
            }
            </Container>
        </div>
    );
};

export default MyBooking;