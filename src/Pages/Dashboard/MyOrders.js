import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://golden-weight-tools.herokuapp.com/order/${user.email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                    navigate('/');
                }
                return res.json()
            })
            .then(data => setOrders(data))
    }, [user, navigate]);

    const handleCancel = (id) => {
        const proceed = window.confirm('Are you sure you want to cancel the order ?');
        if (proceed) {
            fetch(`https://golden-weight-tools.herokuapp.com/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        toast.error('Ordered Canceled Successfully')
                    }
                })
        }
    }

    if (loading) {
        return <Loading></Loading>;
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Product Name</th>
                            <th>Order Quantity</th>
                            <th>Total Price(usd)</th>
                            <th>Payment</th>
                            <th>Cancel Order</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr key={order._id}>
                                <th>{index + 1}</th>
                                <td>{order.name}</td>
                                <td>{order.productName}</td>
                                <td>{order.orderQuantity}</td>
                                <td>{order.price}</td>
                                <td>
                                    {
                                        (order.price && !order.paid)
                                        &&
                                        <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-success btn-sm text-white'>Pay</button></Link>
                                    }
                                    {
                                        (order.price && order.paid)
                                        &&
                                        <div>
                                            <span className='font-semibold'>Paid</span> <br />
                                            <span>Transaction Id: <br />
                                                <span className='text-orange-500 font-medium'>{order.transactionId}</span>
                                            </span>
                                        </div>
                                    }
                                </td>
                                <td>
                                    {
                                        !order.paid
                                        &&
                                        <button onClick={() => handleCancel(order._id)} className='btn btn-error btn-sm text-black'>Cancel</button>
                                    }
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;