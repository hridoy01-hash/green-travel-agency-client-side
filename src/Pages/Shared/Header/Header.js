import React from 'react';
import { Container, Navbar,Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
import logo from '../../../images/creativee-04--removebg-preview.png'
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
 const{user,logout} = useAuth();
    return (
        <div>
             <Navbar collapseOnSelect expand="sm" bg="dark" variant="light">
    <Container className="mt-3">
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
    <NavLink to="/" style={{textDecoration:"none",fontSize:"20px", marginRight:"10px",fontWeight:"bold",padding:"6px",color:"white"}} >
       <img style={{height:"55px"}} src={logo} alt="" /> 
       <span className="text-primary">Green Travel</span>
    </NavLink> 
    
    {/* NavLink for Route */}

    <Navbar.Collapse id="responsive-navbar-nav" className="me-auto nav-iteam justify-content-end">
    <NavLink to="/home" style={{textDecoration:"none",fontSize:"20px", marginRight:"10px",fontWeight:"bold",padding:"6px",color:"white"}} activeStyle={activeStyle} >Home</NavLink>
    { user.email && <NavLink to="/mybooking" style={{textDecoration:"none",fontSize:"20px", marginRight:"10px",fontWeight:"bold",padding:"6px",color:"white"}} activeStyle={activeStyle} >My Booking</NavLink>}
    {user.email && <NavLink to="/managebooking" style={{textDecoration:"none",fontSize:"20px", marginRight:"10px",fontWeight:"bold",padding:"6px",color:"white"}} activeStyle={activeStyle} >Manage Booking</NavLink>}
    { user.email && <NavLink to="/addservice" style={{textDecoration:"none",fontSize:"20px", marginRight:"10px",fontWeight:"bold",padding:"6px",color:"white"}} activeStyle={activeStyle} >Add Service</NavLink>}
    
    <NavLink to="/about" style={{textDecoration:"none",fontSize:"20px", marginRight:"10px",fontWeight:"bold",padding:"6px",color:"white"}} activeStyle={activeStyle}>About </NavLink>
   
    
  { 
   !user.email? <Link to ="/login"> <Button style={{color:"white"}} variant="outline-primary">Login<i className="fas fa-sign-in-alt"></i></Button></Link>
    :
   <Button onClick={logout} style={{color:"white"}} variant="outline-primary">Logout {user.displayName} <i className="fas fa-user-plus"></i></Button>}
   
    
    </Navbar.Collapse>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;