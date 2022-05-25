import React from 'react';
import americanExpress from '../../assets/payment-accept/American-Express-icon.png';
import masterCard from '../../assets/payment-accept/Master-Card-Blue-icon.png';
import visaCard from '../../assets/payment-accept/payment-creditcard-visa-icon.png';
import discover from '../../assets/payment-accept/Discover-icon.png';
import paypal from '../../assets/payment-accept/Paypal-icon.png';
import westernUnion from '../../assets/payment-accept/Western-Union-icon.png';
import googleWallet from '../../assets/payment-accept/Google-Wallet-icon.png';

const WeAccept = () => {
    return (
        <div className='my-12'>
            <hr />
            <h1 className='text-center text-6xl font-extrabold text-zinc-500 my-6'>We Accept ...</h1>
            <div className='mx-6 md:mx-12 flex flex-wrap justify-center gap-4 lg:gap-12'>
                <img src={visaCard} alt="" />
                <img src={masterCard} alt="" />
                <img src={americanExpress} alt="" />
                <img src={discover} alt="" />
                <img src={paypal} alt="" />
                <img src={googleWallet} alt="" />
                <img src={westernUnion} alt="" />
            </div>
        </div>
    );
};

export default WeAccept;