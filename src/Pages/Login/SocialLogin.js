import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        signInWithGoogle();
    }

    if (user) {
        navigate('/')
    }

    if (loading) {
        return <Loading></Loading>;
    }

    return (
        <div>
            <div class="divider">OR</div>
            <div>
                <button
                    onClick={handleGoogleLogin}
                    class="btn btn-outline w-full rounded-full">
                    Continue With Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;