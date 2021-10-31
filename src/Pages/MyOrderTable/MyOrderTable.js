import React from 'react';
import { Container } from 'react-bootstrap';
import swal from 'sweetalert';

const MyOrderTable = (props) => {
    const {email,_id,status} =  props.order

    const handleDelete = id =>{
   


      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          fetch(`https://stark-plateau-94648.herokuapp.com/orders/${id}`, {
        method: "DELETE",
        headers: { "Content-type": "application/json" },
      })
        .then((res) => res.json())
        .then((result) => {
         
        });
        } else {
          swal("Your imaginary file is safe!");
        }
      });
         
  }
   
    return (
        <Container>
        <div style={{overflow:'scroll'}}>
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
      <td> <button className="btn btn-warning">{status}</button> <button className="btn btn-danger" onClick={()=>handleDelete(_id)}>DELETE</button></td>
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

export default MyOrderTable;