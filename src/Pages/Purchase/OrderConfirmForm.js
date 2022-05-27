import React from 'react';
import { useForm } from 'react-hook-form';

const OrderConfirmForm = ({ user, tool }) => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    };

    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col">
                <div class="text-center lg:text-left">
                    <h1 class="text-6xl font-bold mb-4">Confirm Order</h1>
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <input
                                    type="text"
                                    value={user.displayName}
                                    readOnly
                                    className="input input-bordered mb-2"
                                    {...register('name')}
                                />
                                <input
                                    type="email"
                                    value={user.email}
                                    readOnly
                                    className="input input-bordered mb-2"
                                    {...register('email')}
                                />
                                <input
                                    type="text"
                                    value={tool.name}
                                    readOnly
                                    className="input input-bordered mb-2"
                                    {...register('product')}
                                />
                                <input
                                    type="number"
                                    placeholder='Input Order Quantity'
                                    required
                                    className="input input-bordered mb-2"
                                    {...register('orderQuantity')}
                                />
                                <input
                                    type="text"
                                    placeholder='Your Address'
                                    required
                                    className="input input-bordered mb-2"
                                    {...register('address')}
                                />
                                <input
                                    type="text"
                                    placeholder='Your Phone'
                                    required
                                    className="input input-bordered mb-2"
                                    {...register('phone')}
                                />

                                {/* ----- submit button ----- */}
                                <input type="submit" value='Place Order' className="btn rounded-full text-white mt-4"></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderConfirmForm;