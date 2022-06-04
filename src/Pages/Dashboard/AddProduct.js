import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data)
        fetch('http://localhost:5000/tools', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.acknowledged) {
                    reset()
                    toast.success('Product added Successfully.')
                }
            })
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col w-full">
                <div className="text-center">
                    <h1 className="text-3xl font-bold">Add New Product</h1>
                </div>
                <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <input
                                    type="text"
                                    placeholder='Product Name'
                                    className="input input-bordered mb-2"
                                    {...register('name')}
                                />
                                <input
                                    type="url"
                                    placeholder='Image Url'
                                    className="input input-bordered mb-2"
                                    {...register('img')}
                                />
                                <textarea
                                    type="text"
                                    placeholder="Product Description"
                                    className="input input-bordered mb-2"
                                    {...register('description')}
                                />
                                <input
                                    type="number"
                                    placeholder="Minimum Order Quantity"
                                    className="input input-bordered mb-2"
                                    {...register('minOrderQuantity')}
                                />
                                <input
                                    type="number"
                                    placeholder="Available Quantity"
                                    className="input input-bordered mb-2"
                                    {...register('availableQuantity')}
                                />
                                <input
                                    type="number"
                                    placeholder="Price"
                                    className="input input-bordered mb-2"
                                    {...register('price')}
                                />
                                {/* ----- submit button ----- */}
                                <input
                                    type="submit"
                                    value='Add Product'
                                    className="btn rounded-lg text-white mt-2"
                                ></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;