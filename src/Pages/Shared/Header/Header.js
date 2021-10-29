import React from 'react';
import { Container, Navbar,Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
import logo from '../../../images/logo.jpg'
import useAuth from '../../../hooks/useAuth';

const Header = () => {
   //NavLink Active Style
   const activeStyle = {
    fontWeight: "bold",
    color: "red",
    textDecoration:"none",
    fontSize:"20px",
    borderRadius:"4px"
    
}
 const{handleGoogleSignIn} = useAuth();
    return (
        <div>
             <Navbar collapseOnSelect expand="sm" bg="light" variant="light">
    <Container className="mt-3">
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
    <NavLink to="/home" style={{textDecoration:"none",fontSize:"20px", marginRight:"10px",fontWeight:"bold",padding:"6px",color:"black"}} activeStyle={activeStyle} >
       <img style={{height:"48px"}} src={logo} alt="" /> 
       <span>Sheba Health Care</span>
    </NavLink> 
    
    {/* NavLink for Route */}

    <Navbar.Collapse id="responsive-navbar-nav" className="me-auto nav-iteam justify-content-end">
    <NavLink to="/home" style={{textDecoration:"none",fontSize:"20px", marginRight:"10px",fontWeight:"bold",padding:"6px",color:"black"}} activeStyle={activeStyle} >Home</NavLink>
    <NavLink to="/mybooking" style={{textDecoration:"none",fontSize:"20px", marginRight:"10px",fontWeight:"bold",padding:"6px",color:"black"}} activeStyle={activeStyle} >My Booking</NavLink>
    <NavLink to="/managebooking" style={{textDecoration:"none",fontSize:"20px", marginRight:"10px",fontWeight:"bold",padding:"6px",color:"black"}} activeStyle={activeStyle} >Manage Booking</NavLink>
    <NavLink to="/addservice" style={{textDecoration:"none",fontSize:"20px", marginRight:"10px",fontWeight:"bold",padding:"6px",color:"black"}} activeStyle={activeStyle} >Add Service</NavLink>
    
    <NavLink to="/about" style={{textDecoration:"none",fontSize:"20px", marginRight:"10px",fontWeight:"bold",padding:"6px",color:"black"}} activeStyle={activeStyle}>About </NavLink>
   
    <Link to="/login">
   <Button onClick={handleGoogleSignIn} style={{color:"black"}} variant="outline-primary">Login <i className="fas fa-sign-in-alt"></i></Button>
   <Button style={{color:"black"}} variant="outline-primary">Logout <i className="fas fa-user-plus"></i></Button>
    </Link>
    
    </Navbar.Collapse>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;