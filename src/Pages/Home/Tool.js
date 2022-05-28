import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({ tool }) => {
    const { _id, name, img, description, minOrderQuantity, availableQuantity, price } = tool;
    const navigate = useNavigate();

    return (
        <div className="card max-w-sm shadow-2xl mx-auto">
            <figure><img className='w-4/5 lg:w-full' src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className='text-sm font-light'>{description}</p>
                <p className='font-semibold text-sm'>
                    Available: <span className='text-2xl'>{availableQuantity}</span> pcs
                    <br />
                    Minimum Order Quantity: <span className='text-2xl'>{minOrderQuantity}</span> pcs
                    <br />
                    Price: <span className='text-2xl'>{price}$</span> /pcs
                </p>
                <div className="card-actions justify-center">
                    <button
                        onClick={() => navigate(`/purchase/${_id}`)}
                        className="btn text-white">
                        Purchase
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Tool;