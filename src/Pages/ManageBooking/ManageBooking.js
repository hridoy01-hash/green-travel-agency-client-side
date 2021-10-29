import React, { useEffect, useState } from 'react';
import OrderTable from '../OrderTable/OrderTable';

const ManageBooking = () => {
    const [orders,setOrder] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/orders')
        .then(res=>res.json())
        .then(result => setOrder(result))
    },[])
    return (
        <div>
            <h2>order length{orders.length}</h2>
            {
                orders.map(order=><OrderTable order={order} key={order._id}></OrderTable>)
            }
        </div>
    );
};

export default ManageBooking;