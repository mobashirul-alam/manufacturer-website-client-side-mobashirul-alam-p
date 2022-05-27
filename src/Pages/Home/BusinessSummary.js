import React from 'react';
import client from '../../assets/icon/Clients-icon.png';
import revenue from '../../assets/icon/revenue.png';
import reviews from '../../assets/icon/reviews.png';
import tools from '../../assets/icon/tools.png';

const BusinessSummary = () => {
    return (
        <div>
            <h1 className='text-center text-5xl font-extrabold mb-4'>Business Stats</h1>
            <hr className='border border-accent w-4/5 lg:w-1/2 mx-auto lg:mb-4' />
            <div className='flex justify-center'>
                <div className="stats stats-vertical lg:stats-horizontal shadow-2xl mt-4 lg:w-4/5">

                    <div className="stat">
                        <div className="stat-figure text-primary">
                            <div className='w-16'>
                                <img src={revenue} alt="" />
                            </div>
                        </div>
                        <div className="stat-title">Annual revenue</div>
                        <div className="stat-value text-primary">120M+</div>
                        <div className="stat-desc">27% more than last year</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <div className='w-16'>
                                <img src={reviews} alt="" />
                            </div>
                        </div>
                        <div className="stat-title">Reviews</div>
                        <div className="stat-value text-secondary">33K+</div>
                        <div className="stat-desc">15% more than last month</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <div className='w-16'>
                                <img src={tools} alt="" />
                            </div>
                        </div>
                        <div className="stat-title">Tools</div>
                        <div className="stat-value text-accent">50+</div>
                        <div className="stat-desc">All needed tools available</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <div className="avatar online">
                                <div className="w-16 rounded-full">
                                    <img className='p-2 bg-slate-100' src={client} alt='' />
                                </div>
                            </div>
                        </div>
                        <div className="stat-value">100+</div>
                        <div className="stat-title">Happy <br /> Customers</div>
                        <div className="stat-desc text-secondary">Worldwide</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;