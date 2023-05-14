import React from 'react';
import NavBar from '../Header/NavBar';
import Explore from '../Explore/Explore';
import Banner from '../Banner/Banner';


const Home = () => {
    return (
        <div>
            <NavBar/>
            <Banner/>
            <Explore/>
        </div>
    );
};

export default Home;