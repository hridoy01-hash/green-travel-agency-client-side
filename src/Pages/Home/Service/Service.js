import React from 'react';
import { Card, Col,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Service = (props) => {
    const {img,name,description,_id} = props.service
    console.log(props.service);
    return (
        <div>
            <Col>
      <Card className="text-center shadow mb-5 bg-body rounded" style={{minHeight:"400px"}}>
        <Card.Img variant="top" src={img} style={{height:"200px"}} />
        <Card.Body>
          <Card.Title className="fw-bold">{name}</Card.Title>
          <Card.Text className="text-justify">
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