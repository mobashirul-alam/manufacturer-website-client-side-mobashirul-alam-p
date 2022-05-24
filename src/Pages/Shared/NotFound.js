import React from 'react';
import notFound from '../../assets/404-not-found.jpg';

const NotFound = () => {
    return (
        <div>
            <img class="lg:w-3/5 mx-auto" src={notFound} alt="" />
        </div>
    );
};

export default NotFound;