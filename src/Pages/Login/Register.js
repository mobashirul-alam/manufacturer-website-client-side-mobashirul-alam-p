import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col w-full">
                <div class="text-center">
                    <h1 class="text-5xl font-bold">Register now!</h1>
                </div>
                <div class="card w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    class="input input-bordered"
                                    {...register('name', {
                                        required: {
                                            value: true,
                                            message: 'Name is required'
                                        },
                                        minLength: {
                                            value: 5,
                                            message: 'Min length is 5 character'
                                        }
                                    })}
                                />
                                <label>
                                    {errors.name?.type === 'required' && <span class="text-red-500 label-text-alt">{errors.name.message}</span>}
                                    {errors.name?.type === 'minLength' && <span class="text-red-500 label-text-alt">{errors.name.message}</span>}
                                </label>
                                {/* ----- Email ----- */}
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="email"
                                    class="input input-bordered"
                                    {...register('email', {
                                        required: {
                                            value: true,
                                            message: 'Email is required'
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Invalid Email'
                                        }
                                    })}
                                />
                                <label>
                                    {errors.email?.type === 'required' && <span class="text-red-500 label-text-alt">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span class="text-red-500 label-text-alt">{errors.email.message}</span>}
                                </label>
                                {/* ----- Password ----- */}
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="password"
                                    class="input input-bordered"
                                    {...register('password', {
                                        required: {
                                            value: true,
                                            message: 'Password is required'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Password must be 6 characters or longer'
                                        }
                                    })}
                                />
                                <label>
                                    {errors.password?.type === 'required' && <span class="text-red-500 label-text-alt">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span class="text-red-500 label-text-alt">{errors.password.message}</span>}
                                </label>
                                {/* ----- login page ----- */}
                                <label class="label">
                                    <span class="label-text-alt">
                                        Already have an account ?
                                        <Link to='/login' class="label-text-alt link-hover text-blue-500"> Please Login</Link>
                                    </span>
                                </label>
                                {/* ----- submit button ----- */}
                                <input type="submit" value='Register' class="btn rounded-full text-white mt-4"></input>
                            </div>
                        </form>
                        <div class="divider">OR</div>
                        <div>
                            <button class="btn btn-outline w-full rounded-full">Continue With Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;