import React from 'react';
import client from '../../assets/icon/Clients-icon.png';
import revenue from '../../assets/icon/revenue.png';
import reviews from '../../assets/icon/reviews.png';
import tools from '../../assets/icon/tools.png';

const BusinessSummary = () => {
    return (
        <div>
            <h1 className='text-center text-5xl font-extrabold'>Business Stats</h1>
            <div className='flex justify-center'>
                <div class="stats stats-vertical lg:stats-horizontal shadow-xl mt-4 lg:w-4/5">

                    <div class="stat">
                        <div class="stat-figure text-primary">
                            <div className='w-16'>
                                <img src={revenue} alt="" />
                            </div>
                        </div>
                        <div class="stat-title">Annual revenue</div>
                        <div class="stat-value text-primary">120M+</div>
                        <div class="stat-desc">27% more than last year</div>
                    </div>

                    <div class="stat">
                        <div class="stat-figure text-secondary">
                            <div className='w-16'>
                                <img src={reviews} alt="" />
                            </div>
                        </div>
                        <div class="stat-title">Reviews</div>
                        <div class="stat-value text-secondary">33K+</div>
                        <div class="stat-desc">15% more than last month</div>
                    </div>

                    <div class="stat">
                        <div class="stat-figure text-secondary">
                            <div className='w-16'>
                                <img src={tools} alt="" />
                            </div>
                        </div>
                        <div class="stat-title">Tools</div>
                        <div class="stat-value text-accent">50+</div>
                        <div class="stat-desc">All needed tools available</div>
                    </div>

                    <div class="stat">
                        <div class="stat-figure text-secondary">
                            <div class="avatar online">
                                <div class="w-16 rounded-full">
                                    <img className='p-2 bg-slate-100' src={client} alt='' />
                                </div>
                            </div>
                        </div>
                        <div class="stat-value">100+</div>
                        <div class="stat-title">Happy <br /> Customers</div>
                        <div class="stat-desc text-secondary">Worldwide</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;