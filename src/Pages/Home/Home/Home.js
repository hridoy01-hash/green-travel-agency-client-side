import React from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import AboutTour from '../AboutTour/AboutTour';
import Baner from '../Baner/Baner';
import LearnMore from '../LearnMore/LearnMore';
import Services from '../Services/Services';
import Subscribe from '../Subscribe/Subscribe';


const Home = () => {
  const {isLoading} = useAuth();
  if(isLoading){
    return <Spinner className="text-center d-flex justify-content-center  mx-auto" animation="border" variant="danger" />
  }
    return (
        <div>
          <Baner></Baner>
          <Services></Services>
          <LearnMore></LearnMore>
          <AboutTour></AboutTour>
          <Subscribe></Subscribe>
        </div>
    );
};

export default Home;