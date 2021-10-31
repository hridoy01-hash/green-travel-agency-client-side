import React from 'react';
import { Card, Col,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const {img,name,description,_id} = props.service
    return (
        <div className="service">
            <Col>
      <Card className="text-center shadow mb-3 mt-3 bg-body rounded" style={{minHeight:"400px"}}>
       <div className='img-parent'><Card.Img className='cart-img' variant="top" src={img} style={{height:"200px"}} /></div>
        <Card.Body>
          <Card.Title className="fw-bold">{name}</Card.Title>
          <Card.Text className="text-justify text-muted">
            {description}
          </Card.Text>
       <Link to={`/booking/${_id}`} >
       <Button style={{color:"black"}} variant="outline-primary">Book Now </Button>
       </Link>
       
   
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
};

export default Service;