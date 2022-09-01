import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const ManageOrder = () => {
    const [allOrders, setAllOrders] = useState([]);
    const [orderStatus, setOrderStatus] = useState('');
    useEffect(() => {
        fetch('http://localhost:5000/allOrders', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [allOrders]);

    const handleUpdateOrderStatus = (_id) => {
        const url = `http://localhost:5000/allOrders/${_id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ orderStatus })
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                toast.success('Order Status updated Successfully')
            })
    };

    const handleCancel = (id) => {
        fetch(`https://golden-weight-tools.herokuapp.com/orders/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast.error('Ordered Canceled Successfully')
                }
            })
    };

    return (
        <div class="overflow-x-auto">
            <table class="table table-zebra w-full">
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Product</th>
                        <th>Order Quantity</th>
                        <th>Total Price</th>
                        <th>Pay Status</th>
                        <th>Order Status</th>
                        <th>Cancel Order</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allOrders?.map((order, index) => <tr key={order._id}>
                            <td>{order.name}</td>
                            <td>{order.productName}</td>
                            <td>{order.orderQuantity}</td>
                            <td>{order.price}</td>
                            <td>
                                <button className='btn btn-sm btn-warning'>
                                    {order.paid ? "Paid" : "Unpaid"}
                                </button>
                            </td>
                            <td>
                                {
                                    order.paid &&
                                    <div>
                                        {
                                            order.orderStatus === "Shipped" ?
                                                <button className='btn btn-sm btn-success text-white'>Order Shipped</button>
                                                :
                                                <div>
                                                    <select onChange={(e) => setOrderStatus(e.target.value)} name="orderStatus" id="">
                                                        <option value="Pending">Pending</option>
                                                        <option value="Shipped">Shipped</option>
                                                    </select>
                                                    <button
                                                        onClick={() => handleUpdateOrderStatus(order._id)}
                                                        className='btn btn-sm ml-2 btn-success text-white'>
                                                        Update
                                                    </button>
                                                </div>
                                        }
                                    </div>
                                }
                            </td>
                            <td>
                                {
                                    !order.paid ?
                                        <div>
                                            <label for="admin-cancel-order-modal" className="btn modal-button btn-error btn-sm">
                                                Cancel
                                            </label>
                                            <input type="checkbox" id="admin-cancel-order-modal" class="modal-toggle" />
                                            <div class="modal modal-bottom sm:modal-middle">
                                                <div class="modal-box">
                                                    <label for="admin-cancel-order-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                                    <h3 class="font-bold text-lg">
                                                        Are you sure you want to cancel the order?
                                                    </h3>
                                                    <div class="modal-action">
                                                        <label
                                                            for="admin-cancel-order-modal"
                                                            onClick={() => handleCancel(order._id)}
                                                            className='btn btn-error btn-sm text-black'
                                                        >
                                                            Cancel Order
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        : ""
                                }
                            </td>
                        </tr>
                        )
                    }

                </tbody>
            </table>
        </div>
    );
};

export default ManageOrder;