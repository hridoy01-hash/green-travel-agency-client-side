import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './AddService.css'
const AddService = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/booking',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result =>{
            if(result.insertedId){
                alert('New Destination Added Has been Succesfully');
                reset();
            }
        })
    }
    return (
        <div>
           <Container>
           <p className="text-center text-success mt-3 ">CHOOSE YOUR DESTINATION!!<hr /></p>
           <h3 className="text-center text-muted mb-5"> <span className="fw-bold text-danger" style={{fontSize:"30px"}}>Add A New </span> COUNTRY</h3>

          <div className="d-flex justify-content-center  mx-auto mb-5">
          <form  onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} placeholder="Enter Destintion/Country" />
      <input {...register("description")} placeholder="Enter a Short description " />
      <input {...register("img")} placeholder="Provide Img Url" />
      <input className="btn btn-primary" type="submit" value='Add Product' />
    </form>
          </div>



           </Container>
        </div>
    );
};

export default AddService;