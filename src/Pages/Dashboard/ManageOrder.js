import React, { useEffect, useState } from 'react';

const ManageOrder = () => {
    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allOrders', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [])
    console.log(allOrders);
    return (
        <div class="overflow-x-auto">
            <table class="table table-zebra w-full">
                <thead>
                    <tr>
                        <th>Sl.</th>
                        <th>User</th>
                        <th>Product</th>
                        <th>Order Quantity</th>
                        <th>Total Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allOrders.map((order, index) => <tr key={order._id}>
                            <th>{index + 1}</th>
                            <td>{order.name}</td>
                            <td>{order.productName}</td>
                            <td>{order.orderQuantity}</td>
                            <td>{order.price}</td>
                        </tr>
                        )
                    }

                </tbody>
            </table>
        </div>
    );
};

export default ManageOrder;