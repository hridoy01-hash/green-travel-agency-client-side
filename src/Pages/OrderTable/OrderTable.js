import React from 'react';
import { Container } from 'react-bootstrap';

const OrderTable = (props) => {

    const {email,_id,status} =  props.order
    return (
        <Container>
        <div>
        <table class="table table-border">
  <thead>
    <tr>
      <th scope="col">Order Id</th>
      <th scope="col">User Email</th>
      <th scope="col">Destination</th>
      <th scope="col">Booked Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{_id}</th>
      <td>{email}</td>
      <td>{props.order?.booked?.name}</td>
      {/* <td>{props.order?.booked?.img}</td> */}
      <td><button className="btn btn-warning">{status}</button> <button className="btn btn-danger">DELETE</button></td>
    </tr>
    <tr>
      
    </tr>
    <tr>
      
     
      
    </tr>
  </tbody>
</table>
        </div>
        </Container>
    );
};

export default OrderTable;