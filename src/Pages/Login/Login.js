import React, { useEffect, useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import SocialLogin from './SocialLogin';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const [err, setErr] = useState('');
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    useEffect(() => {
        if (error) {
            setErr(error.message);
        }
    }, [error]);

    const onSubmit = (data) => {
        const { email, password } = data;
        signInWithEmailAndPassword(email, password);
    }

    if (user) {
        navigate(from, { replace: true });
    };

    if (loading) {
        return <Loading></Loading>;
    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col w-full">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
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
                                        }
                                    })}
                                />
                                <label>
                                    {errors.password?.type === 'required' && <span className="text-red-500 label-text-alt">{errors.password.message}</span>}
                                </label>
                                {/* ----- login page ----- */}
                                <label className="label">
                                    <span className="label-text-alt">
                                        New to Golden Weight ?
                                        <Link to='/register' className="label-text-alt link-hover text-blue-500"> Please Register</Link>
                                    </span>
                                </label>
                                <p className="text-red-500 text-sm">{err}</p>
                                {/* ----- submit button ----- */}
                                <input type="submit" value='Login' className="btn rounded-full text-white mt-4"></input>
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