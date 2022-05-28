import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyProfile = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [user, loading] = useAuthState(auth);

    const onSubmit = (data) => {
        fetch(`http://localhost:5000/usersProfile/${user.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                toast.success('Profile updated successfully');
                reset();
            })
    }

    if (loading) {
        return <Loading></Loading>;
    };

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col w-full">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">User Profile</h1>
                    <h1 className="text-sm font-medium">You can update this info any time later</h1>
                </div>
                <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <input
                                    type="text"
                                    value={user.displayName}
                                    className="input input-bordered mb-2"
                                    {...register('name')}
                                />
                                <input
                                    type="email"
                                    value={user.email}
                                    className="input input-bordered mb-2"
                                    {...register('email')}
                                />
                                <textarea
                                    type="text"
                                    placeholder="Educational Qualifications"
                                    className="input input-bordered mb-2"
                                    {...register('education')}
                                />
                                <input
                                    type="text"
                                    placeholder="Your Address"
                                    className="input input-bordered mb-2"
                                    {...register('address')}
                                />
                                <input
                                    type="text"
                                    placeholder="Linkedin Profile link"
                                    className="input input-bordered mb-2"
                                    {...register('linkedin')}
                                />
                                <input
                                    type="text"
                                    placeholder="Facebook Profile link"
                                    className="input input-bordered mb-2"
                                    {...register('facebook')}
                                />
                                <input
                                    type="text"
                                    placeholder="Phone"
                                    className="input input-bordered"
                                    {...register('phone')}
                                />
                                {/* ----- submit button ----- */}
                                <input type="submit" value='Upload' className="btn rounded-lg text-white mt-2"></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;