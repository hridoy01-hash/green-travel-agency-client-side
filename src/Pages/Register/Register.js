import React from 'react';
import { FloatingLabel, Form,Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import register from '../../images/register2.jpg'

const Register = () => {
    const {handleName,handleEmail,error,handlePassword,handleSignup,handleGoogleSignIn} = useAuth();
    return (
        <Container>
      <div className="row">
          <div className="col-md-7">

          <div>
    <p className="text-center text-muted mt-3">Make Your Happiness With Us</p>
    <h3 className="text-center text-muted mt-2"> <span className="fw-bold text-danger" style={{fontSize:"30px"}}>SignUp</span> & Lets Go</h3>
  <FloatingLabel
    controlId="floatingInput"
    label="Enter Name"
    className="mb-3 mt-5"
  >
    <Form.Control onBlur={handleName} type="text" placeholder="Enter Name" required />
  </FloatingLabel>

  <FloatingLabel
    controlId="floatingInput"
    label="Email address"
    className="mb-3"
  >
    <Form.Control onBlur={handleEmail} type="email" placeholder="name@example.com" />
  </FloatingLabel>
<p className="text-danger">{error}</p>
  <FloatingLabel onBlur={handlePassword} controlId="floatingPassword" label="Password">
    <Form.Control type="password" placeholder="Password" />
  </FloatingLabel>
  <p className="mt-2">Already have an Account? <Link to="/login">Login</Link> </p>
  <Button onClick={handleSignup} className="mt-3" variant="outline-primary">SIGNUP</Button> 
  <p className="text-center">----Or use this options----</p>
  <div className="d-flex justify-content-center ">
  <Button onClick={handleGoogleSignIn} className="mt-3 mb-3 me-5" variant="primary"><i className="fab fa-google"></i> SinginUp With Google</Button>
  </div>
        </div>
              
          </div>
          <div className="col-md-5 mt-5">
              <img style={{width:'100%'}} src={register} alt="" />
          </div>
      </div>
      </Container>
    );
};

export default Register;