import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L22aADQxW8v9t3tnTi8TyDxeWYPyw6Vwk2DjNHSDHfxFctukJlvuT1IEKds5SLwgXKbwAW1eFR5GWpwFxkVVbSF00ZOJHbMHy');

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/orders/${id}`

    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    console.log(order)

    if (isLoading) {
        return <Loading></Loading>;
    };

    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl mb-20">
                <div class="card-body">
                    <h2 class="card-title text-accent">Pay for {order.productName}</h2>
                    <hr />
                    <p className='font-medium'>Order Quantity: {order.orderQuantity} pcs</p>
                    <p className='font-medium'>Please Pay: {order.price} USD</p>
                </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;