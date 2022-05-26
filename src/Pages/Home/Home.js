import React from 'react';
import BusinessSummary from './BusinessSummary';
import Reviews from './Reviews';
import StayConnected from './StayConnected';
import SupportExtra from './SupportExtra';
import WeAccept from './WeAccept';

const Home = () => {
    return (
        <div>
            <h1 className='text-center text-6xl'>Welcome to Golden Weight Tools</h1>
            <SupportExtra></SupportExtra>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <WeAccept></WeAccept>
            <StayConnected></StayConnected>
        </div>
    );
};

export default Home;