import React from 'react';
import { Container } from 'react-bootstrap';
import learn1 from '../../../images/learn1.jpg'
import learn2 from '../../../images/learn2.jpg'
import learn3 from '../../../images/learn3.jpg'

const AboutTour = () => {
    return (
        <div className="mt-5">
           
           <Container>
           <p className="text-center text-success mt-5 ">Lastest News<hr /></p>
           <h3 className="text-center text-muted mb-5"> <span className="fw-bold text-danger" style={{fontSize:"30px"}}>Learn More About</span> Tours</h3>

           <div>
           <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card  shadow p-3 mb-5 bg-body rounded">
      <img src={learn3} className="card-img-top" alt="..."/>
      <div className="card-body text-center">
        <h5 className="card-title"><span className="text-warning">THAILAN</span> | May 11, 2020</h5>
        <p className="card-text">Thailand is smack dab in the middle of one of the warmest, most humid climates on the planet. That’s the whole point, right? Warm weather and perfect beaches. But what you don’t see in those glamorized photos tagged with #wanderlust and #paradise, is how hot </p>
        <button className="btn btn-warning">Explore More</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card shadow p-3 mb-5 bg-body rounded ">
      <img src={learn2} className="card-img-top" alt="..."/>
      <div className="card-body text-center">
      <h5 className="card-title"><span className="text-warning">Swizerland</span> | March 11, 2020</h5>
        <p className="card-text">Swizerland is smack dab in the middle of one of the warmest, most humid climates on the planet. That’s the whole point, right? Warm weather and perfect beaches. But what you don’t see in those glamorized photos tagged with #wanderlust and #paradise, is how hot.</p>
        <button className="btn btn-warning">Explore More</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card shadow p-3 mb-5 bg-body rounded">
      <img src={learn1} alt="..."/>
      <div className="card-body text-center">
      <h5 className="card-title"><span className="text-warning">Indoneshiya</span> | March 11, 2020</h5>
        <p className="card-text">Bali is smack dab in the middle of one of the warmest, most humid climates on the planet. That’s the whole point, right? Warm weather and perfect beaches. But what you don’t see in those glamorized photos tagged with #wanderlust and #paradise, is how hot.</p>
        <button className="btn btn-warning">Explore More</button>
      </div>
    </div>
  </div>
</div>
           </div>
          </Container>
        </div>
    );
};

export default AboutTour;