import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const onSubmit = (data) => {
        const { email, password } = data;
        signInWithEmailAndPassword(email, password);
    }

    if (user) {
        navigate('/')
    };

    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col w-full">
                <div class="text-center">
                    <h1 class="text-5xl font-bold">Login now!</h1>
                </div>
                <div class="card w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="form-control">
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
                                        New to Golden Weight ?
                                        <Link to='/register' class="label-text-alt link-hover text-blue-500"> Please Register</Link>
                                    </span>
                                </label>
                                {/* ----- submit button ----- */}
                                <input type="submit" value='Login' class="btn rounded-full text-white mt-4"></input>
                            </div>
                        </form>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;