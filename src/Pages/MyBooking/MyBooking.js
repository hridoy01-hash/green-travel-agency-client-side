import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyBooking = () => {
    const [orders,setOrder] = useState([])
    const {user} = useAuth();
    const email = user.email
    useEffect(()=>{
        fetch(`http://localhost:5000/orders/${email}`)
        .then(res => res.json())
        .then(result => setOrder(result))
        
    },[email])
    return (
        <div>
            <h2>This is my booking lengith {orders.length}</h2>
            {
                orders.map(order =>console.log(order))
            }
        </div>
    );
};

export default MyBooking;