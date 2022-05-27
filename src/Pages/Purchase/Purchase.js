import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import OrderConfirmForm from './OrderConfirmForm';

const Purchase = () => {
    const [user, loading] = useAuthState(auth);
    const [tool, setTool] = useState({});
    const params = useParams();
    const id = params.id;

    const { _id, name, img, description, minOrderQuantity, availableQuantity, price } = tool;

    useEffect(() => {
        fetch(`http://localhost:5000/tool/${id}`)
            .then(res => res.json())
            .then(data => setTool(data))
    }, [id]);

    if (loading) {
        return <Loading></Loading>;
    };

    return (
        <div className='md:flex mb-20 flex-row-reverse'>
            <div className='flex-1'>
                <div class="card max-w-lg shadow-2xl mx-auto">
                    <figure><img className='w-2/3' src={img} alt="" /></figure>
                    <div class="card-body pt-0">
                        <h2 class="card-title text-4xl">{name}</h2>
                        <hr className='border' />
                        <p className='text-lg '>
                            <span className='font-medium'>Product Info:</span>
                            <br /> {description}
                        </p>
                        <p className='font-medium text-lg'>
                            Available: <span className='text-3xl'>{availableQuantity}k</span> pcs
                            <br />
                            Minimum Order Quantity: <span className='text-3xl'>{minOrderQuantity}</span> pcs
                            <br />
                            Price: <span className='text-3xl'>{price}$</span> /pcs
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex-1'>
                <OrderConfirmForm
                    user={user}
                    tool={tool}
                ></OrderConfirmForm>
            </div>
        </div>
    );
};

export default Purchase;