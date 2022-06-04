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
    const { name: productName, minOrderQuantity, availableQuantity, price } = tool;
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const params = useParams();
    const id = params.id;


    const [inputOrder, setInputOrder] = useState();

    useEffect(() => {
        fetch(`https://golden-weight-tools.herokuapp.com/tool/${id}`)
            .then(res => res.json())
            .then(data => setTool(data))
    }, [id]);

    const handleInputOrder = (e) => {
        setInputOrder(e.target.value)
    }

    // console.log(register('orderQuantity').onChange)

    const onSubmit = (data) => {
        const totalPrice = price * data.orderQuantity;
        const order = {
            ...data,
            productName,
            orderQuantity: inputOrder || minOrderQuantity,
            price: totalPrice
        };
        console.log(order, totalPrice, price);
        if (data) {
            fetch('https://golden-weight-tools.herokuapp.com/orders', {
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
        <div className="hero min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-6xl font-bold mb-2">Confirm Order</h1>
                    <h1 className="text-2xl font-medium">For - {productName}</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
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
                                // disabled={minOrderQuantity > inputOrder}
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