import React, { useEffect, useState } from 'react';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://golden-weight-tools.herokuapp.com/tools', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(result => setProducts(result))
    }, [])
    return (
        <div class="overflow-x-auto mb-12">
            <table class="table table-zebra w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Product</th>
                        <th>Minimum Order Quantity</th>
                        <th>Available Quantity</th>
                        <th>Price(USD)</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => <tr key={product._id}>
                            <th>
                                <div class="avatar">
                                    <div class="w-20 rounded">
                                        <img src={product.img} alt="Product Img" />
                                    </div>
                                </div>
                            </th>
                            <td>{product.name}</td>
                            <td>{product.minOrderQuantity} pcs</td>
                            <td>{product.availableQuantity} pcs</td>
                            <td>{product.price}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageProducts;