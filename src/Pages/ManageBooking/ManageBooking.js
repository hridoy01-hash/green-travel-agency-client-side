import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import OrderTable from '../OrderTable/OrderTable';

const ManageBooking = () => {
    const [orders,setOrder] = useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:5000/orders')
        .then(res=>res.json())
        .then(result => setOrder(result))
    },[orders]);
    return (
        <div>
            <Container>
           <h3 className="text-center text-muted mb-5 mt-3"> <span className="fw-bold text-danger" style={{fontSize:"30px"}}>Total Order </span> DashBoard</h3>
            {
                orders.map(order=><OrderTable order={order} key={order._id}></OrderTable>)
            }
            </Container>
        </div>
    );
};

export default ManageBooking;