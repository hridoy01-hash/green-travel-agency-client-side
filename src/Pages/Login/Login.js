import React from 'react';
import { FloatingLabel, Form,Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import login from '../../images/signup-1.jpg'

const Login = () => {
    const {handleEmail,handlePassword,error,handleLogin,handleGoogleSignIn} = useAuth();
    return (
        <Container>
        <div className="row">
            <div className="col-md-7">

            <div className="">     
    <p className="text-center text-muted mt-3 ">LETS MORE TOUR? <hr /></p>
    <h3 className="text-center text-muted mb-5"> <span className="fw-bold text-danger" style={{fontSize:"30px"}}>Please</span> Signin</h3>
  <FloatingLabel
    controlId="floatingInput"
    label="Email address"
    className="mb-3"
  >
    <Form.Control onBlur={handleEmail} type="email" placeholder="name@example.com" />
    
  </FloatingLabel>
  
  <p className="text-danger">{error}</p>
  <FloatingLabel controlId="floatingPassword" label="Password">
    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
  </FloatingLabel>
  <p className="mt-2">I have no Account? <Link to="/register"> Register</Link> </p>
  <Button onClick={handleLogin} className="mt-3" variant="outline-primary">Confirm Login</Button> 
  <p className="text-center">----Or use one of these options----</p>
  <div className="d-flex justify-content-center mb-5 ">
  <Button onClick={handleGoogleSignIn} className="mt-3 mb-3 me-5 fw-bold" variant="outline-primary"><i className="fab fa-google"></i> Signin With Google</Button>
  
  </div>
         
        </div>
                
            </div>
            <div className="col-md-5">
               <img style={{width:'100%'}} src={login} alt="" />
            </div>
        </div>
       
        </Container>
       
    );
};

export default Login;