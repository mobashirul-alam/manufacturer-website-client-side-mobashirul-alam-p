import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import SocialLogin from './SocialLogin';
import Loading from '../Shared/Loading';
import useToken from '../../hooks/useToken';

const Register = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const navigate = useNavigate();
    const [err, setErr] = useState('');

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const [token] = useToken(user);

    const onSubmit = async (data) => {
        const { name, email, password } = data;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        toast(`Successfully registered user "${name}"`);
        reset();
    }

    useEffect(() => {
        if (error || updateError) {
            setErr(error.message || updateError.message);
        }
    }, [error, updateError]);

    if (token) {
        navigate('/')
    }

    if (loading || updating) {
        return <Loading></Loading>;
    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col w-full">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    className="input input-bordered"
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
                                    {errors.name?.type === 'required' && <span className="text-red-500 label-text-alt">{errors.name.message}</span>}
                                    {errors.name?.type === 'minLength' && <span className="text-red-500 label-text-alt">{errors.name.message}</span>}
                                </label>
                                {/* ----- Email ----- */}
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="email"
                                    className="input input-bordered"
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
                                    {errors.email?.type === 'required' && <span className="text-red-500 label-text-alt">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="text-red-500 label-text-alt">{errors.email.message}</span>}
                                </label>
                                {/* ----- Password ----- */}
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="password"
                                    className="input input-bordered"
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
                                    {errors.password?.type === 'required' && <span className="text-red-500 label-text-alt">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="text-red-500 label-text-alt">{errors.password.message}</span>}
                                </label>
                                {/* ----- login page ----- */}
                                <label className="label">
                                    <span className="label-text-alt">
                                        Already have an account ?
                                        <Link to='/login' className="label-text-alt link-hover text-blue-500"> Please Login</Link>
                                    </span>
                                </label>
                                <p className="text-red-500 text-sm">{err}</p>
                                {/* ----- submit button ----- */}
                                <input type="submit" value='Register' className="btn rounded-full text-white mt-4"></input>
                            </div>
                        </form>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;