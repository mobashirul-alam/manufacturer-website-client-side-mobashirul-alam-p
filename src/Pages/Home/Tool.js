import React from 'react';

const Tool = ({ tool }) => {
    const { name, img, description, minOrderQuantity, availableQuantity, price } = tool;
    return (
        <div class="card max-w-sm shadow-2xl mx-auto">
            <figure><img className='w-4/5 lg:w-full' src={img} alt="" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p className='text-sm font-light'>{description}</p>
                <p className='font-semibold text-sm'>
                    Available: <span className='text-2xl'>{availableQuantity}k</span> pcs
                    <br />
                    Minimum Order Quantity: <span className='text-2xl'>{minOrderQuantity}</span> pcs
                    <br />
                    Price: <span className='text-2xl'>{price}$</span> /pcs
                </p>
                <div class="card-actions justify-center">
                    <button class="btn text-white">Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;