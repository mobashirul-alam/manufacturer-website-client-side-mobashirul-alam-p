import React from 'react';
import support from '../../assets/extra/customer-service.png';
import discount from '../../assets/extra/discount.png';
import moneyReturn from '../../assets/extra/return-of-investment.png';

const SupportExtra = () => {
    return (
        <div className='flex flex-wrap justify-center gap-20 my-12'>
            <div className='flex items-center gap-4'>
                <div>
                    <img src={support} alt="" />
                </div>
                <div>
                    <p>Online Support 24/7</p>
                    <p><small>Support Online 24 hours</small></p>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <div>
                    <img src={moneyReturn} alt="" />
                </div>
                <div>
                    <p>Money Return</p>
                    <p><small>Back Guarantee Under a week</small></p>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <div>
                    <img src={discount} alt="" />
                </div>
                <div>
                    <p>Member Discount</p>
                    <p><small>On every order upto 10%</small></p>
                </div>
            </div>
        </div>
    );
};

export default SupportExtra;