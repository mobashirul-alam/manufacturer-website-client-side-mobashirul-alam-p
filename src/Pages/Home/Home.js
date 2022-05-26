import React from 'react';
import BusinessSummary from './BusinessSummary';
import StayConnected from './StayConnected';
import WeAccept from './WeAccept';

const Home = () => {
    return (
        <div>
            <h1 className='text-center text-6xl'>Welcome to Golden Weight Tools</h1>
            <BusinessSummary></BusinessSummary>
            <WeAccept></WeAccept>
            <StayConnected></StayConnected>
        </div>
    );
};

export default Home;