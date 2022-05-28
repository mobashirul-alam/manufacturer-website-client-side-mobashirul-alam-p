import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const OrderConfirmForm = () => {
    const [user, loading] = useAuthState(auth);
    const [tool, setTool] = useState({});
    const { name: productName, minOrderQuantity, availableQuantity } = tool;
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const params = useParams();
    const id = params.id;


    const [inputOrder, setInputOrder] = useState();

    useEffect(() => {
        fetch(`http://localhost:5000/tool/${id}`)
            .then(res => res.json())
            .then(data => setTool(data))
    }, [id]);

    const handleInputOrder = (e) => {
        setInputOrder(e.target.value)
    }

    // console.log(register('orderQuantity').onChange)

    const onSubmit = (data) => {
        const order = { ...data, productName, orderQuantity: inputOrder || minOrderQuantity }
        console.log(order);
        if (data) {
            fetch('http://localhost:5000/orders', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(order)
            })
                .then(res => res.json())
                .then(result => {
                    console.log(result)
                    toast.success('Order Placed Successfully')
                    reset();
                })
        }
    };

    if (loading) {
        return <Loading></Loading>;
    };

    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col">
                <div class="text-center">
                    <h1 class="text-6xl font-bold mb-2">Confirm Order</h1>
                    <h1 class="text-2xl font-medium">For - {productName}</h1>
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <input
                                    type="text"
                                    value={user.displayName}
                                    className="input input-bordered mb-2"
                                    {...register('name')}
                                />
                                <input
                                    type="email"
                                    value={user.email}
                                    className="input input-bordered mb-2"
                                    {...register('email')}
                                />
                                <input
                                    type="number"
                                    placeholder='Input Order Quantity'
                                    required
                                    defaultValue={minOrderQuantity}
                                    name='orderQuantity'
                                    className="input input-bordered mb-2"
                                    {...register('orderQuantity', {
                                        max: {
                                            value: availableQuantity,
                                            message: `Order quantity can not exceed ${availableQuantity}`
                                        },
                                        min: {
                                            value: minOrderQuantity,
                                            message: `Minimum order quantity is ${minOrderQuantity}`
                                        },
                                        onChange: (e) => {
                                            handleInputOrder(e)
                                        }
                                    })}
                                />
                                <label>
                                    {errors.orderQuantity?.type === 'max' && <span className="text-red-500 label-text-alt">{errors.orderQuantity.message}</span>}
                                    {errors.orderQuantity?.type === 'min' && <span className="text-red-500 label-text-alt">{errors.orderQuantity.message}</span>}
                                </label>
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
                                <input
                                    type="submit"
                                    value='Place Order'
                                    className="btn rounded-full text-white mt-4"
                                    disabled={minOrderQuantity > inputOrder || inputOrder > availableQuantity}
                                ></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderConfirmForm;