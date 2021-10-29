import React from 'react';
import AboutTour from '../AboutTour/AboutTour';
import Baner from '../Baner/Baner';
import LearnMore from '../LearnMore/LearnMore';
import Services from '../Services/Services';
import Subscribe from '../Subscribe/Subscribe';


const Home = () => {
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