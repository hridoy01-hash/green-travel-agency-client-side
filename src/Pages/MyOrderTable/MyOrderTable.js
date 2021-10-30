import React from 'react';
import { Container } from 'react-bootstrap';
const MyOrderTable = (props) => {
    const {email,_id,status} =  props.order

    const handleDelete = id =>{
   
         const procced = window.confirm('Are Your Sure Want to DELETE')
         if(procced){
               fetch(`http://localhost:5000/orders/${id}`, {
        method: "DELETE",
        headers: { "Content-type": "application/json" },
      })
        .then((res) => res.json())
        .then((result) => {

            if(result.deletedCount >0){
                alert('Delete has been successfully');
                
            }
         
        });
         }
      
    }

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