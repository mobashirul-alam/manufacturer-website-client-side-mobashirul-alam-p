import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Reviews from './Reviews';
import StayConnected from './StayConnected';
import SupportExtra from './SupportExtra';
import Tools from './Tools';
import WeAccept from './WeAccept';

const Home = () => {
    return (
        <div>
            {/* <h1 className='text-center text-6xl'>Welcome to Golden Weight Tools</h1> */}
            <Banner></Banner>
            <SupportExtra></SupportExtra>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <WeAccept></WeAccept>
            <StayConnected></StayConnected>
        </div>
    );
};

export default Home;