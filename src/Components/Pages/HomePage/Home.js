import React from 'react';
import Banner from './Carousel/Carousel';
import Navigation from './Navigation/navigation';
import Objective from './Objective/Objective';
import Welcom from './Welcome/Welcom';

const Home = () => {
    return (
        <div>
    <Navigation></Navigation>
   <Banner></Banner>
   <Welcom></Welcom>
   <Objective></Objective>
        </div>
    );
};

export default Home;