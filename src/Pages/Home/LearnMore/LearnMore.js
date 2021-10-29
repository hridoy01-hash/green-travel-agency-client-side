import React from 'react';
import { Container } from 'react-bootstrap';
import discount1 from '../../../images/discount1.jpg'
import discount2 from '../../../images/discount2.jpg'
import discount3 from '../../../images/discount3.jpg'

const LearnMore = () => {
    return (
        <div>
           
            <Container>
            <p className="text-center text-success mt-3 ">More Discount More Fun !!<hr /></p>
           <h3 className="text-center text-muted mb-5"> <span className="fw-bold text-danger" style={{fontSize:"30px"}}>DEALS AND </span> DISCOUNTS</h3>
           <div className="row row-cols-1 row-cols-md-3 g-4">
              
  <div className="col">
    <div className="card h-100">
      <img src={discount1} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Kiwiana Panorama $3500 <span><del>$5000</del></span></h5>
        <p className="text-danger"><i className="fas fa-clock"></i> 2 DAYS-1 NIGHT</p>
        <p className="card-text">Panorama interdum nunc massa. Velit. Nonummy penatibus luctus. Aliquam. Massa aptent senectus elementum taciti.</p>
        <button className="btn btn-warning"><span className="fw-bold">PRE-BOOK</span> </button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={discount2} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Anchorage to Santo $4500 <span><del>$5000</del></span></h5>
        <p className="text-danger"><i className="fas fa-clock"></i> 2 DAYS-1 NIGHT</p>
        <p className="card-text">Anchorage interdum nunc massa. Velit. Nonummy penatibus luctus. Aliquam. Massa aptent senectus elementum taciti.</p>
        <button className="btn btn-warning"><span className="fw-bold">PRE-BOOK</span> </button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={discount3} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Camping Africa West $2500 <span><del>$5000</del></span></h5>
        <p className="text-danger"><i className="fas fa-clock"></i> 2 DAYS-1 NIGHT</p>
        <p className="card-text">Africa interdum nunc massa. Velit. Nonummy penatibus luctus. Aliquam. Massa aptent senectus elementum taciti.</p>
        <button className="btn btn-warning"><span className="fw-bold">PRE-BOOK</span> </button>
      </div>
    </div>
  </div>
</div>
      
        </Container>   
        </div>
    );
};

export default LearnMore;