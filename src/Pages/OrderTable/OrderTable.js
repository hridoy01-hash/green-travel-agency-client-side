import axios from 'axios';
import { Container } from 'react-bootstrap';
import swal from 'sweetalert';

const OrderTable = (props) => {

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
          fetch(`http://localhost:5000/orders/${id}`, {
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

  


  

  const handleUpdate=id=>{

    swal({
      title: "Are you sure?",
      text: "Once Approved, you will not be able to pendening this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        axios.put(`http://localhost:5000/orders`,{id})

      .then(res => console.log("Your order Approved"));
      } else {
        swal("Your imaginary file is safe!");
      }
    });

    
  }


    return (
        <Container>
        <div>
        <table class="table table-border table-striped">
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
      <td><button className="btn btn-warning" onClick={()=>handleUpdate(_id)}>{status}</button> <button className="btn btn-danger" onClick={()=>handleDelete(_id)}>DELETE</button></td>
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