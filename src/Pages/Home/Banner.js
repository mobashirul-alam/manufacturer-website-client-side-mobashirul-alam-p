import React from 'react';
import bannerProduct from '../../assets/bannerProduct.png';

const Banner = () => {
    return (
        <div>
            {/* -------------------------------------- */}
            <div class="hero min-h-screen lg:min-h-[91vh] bg-cover" style={{ backgroundImage: "url(https://i.ibb.co/42s2KDC/bannerBg.jpg)" }}>
                <div class="hero-content flex-col lg:flex-row-reverse" >
                    <img src={bannerProduct} class="max-w-lg rounded-full shadow-2xl" alt='' />
                    <div>
                        <h1 class="text-6xl text-white font-bold">Welcome To <br /> Golden Weight Tools</h1>
                        <div className='text-white'>
                            <p class="pt-6">
                                Place of finding all of Your Satisfaction about any kinds of tools from Micro to Giant.
                            </p>
                            <p className='pb-3'>
                                Top service provider with great reviews all over the World...
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;