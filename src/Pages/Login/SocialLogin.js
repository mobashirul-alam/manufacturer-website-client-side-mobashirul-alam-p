import React, { useEffect, useState } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const [err, setErr] = useState('');

    const handleGoogleLogin = () => {
        signInWithGoogle();
    }

    useEffect(() => {
        if (error) {
            setErr(error.message);
        }
    }, [error]);

    if (user) {
        navigate('/')
    }

    if (loading) {
        return <Loading></Loading>;
    }

    return (
        <div>
            <div className="divider">OR</div>
            <p className="text-red-500 text-sm mb-2">{err}</p>
            <div>
                <button
                    onClick={handleGoogleLogin}
                    className="btn btn-outline w-full rounded-full">
                    Continue With Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;