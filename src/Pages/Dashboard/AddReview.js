import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const AddReview = () => {
    const [user, loading] = useAuthState(auth);
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data)
        fetch('https://golden-weight-tools.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    toast('Thank you for your significant Review');
                    reset();
                }
            })
    };

    if (loading) {
        return <Loading></Loading>;
    }

    return (
        <div className='text-center md:p-8 md:mt-12'>
            <div className='w-1/2 shadow-lg mx-auto pb-4'>
                <h1 className='text-center text-3xl font-medium mb-4'>Review Form</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder="User Name" value={user.displayName} className="input input-bordered w-80 mb-2" required {...register("userName")} />
                    <br />
                    <select className="select select-bordered w-full max-w-xs mb-2" required {...register("rating")}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <br />
                    <textarea className="textarea textarea-bordered w-80" placeholder="Please Comment" required {...register("comment")}></textarea>
                    <br />
                    <input type="submit" value='Place Review' className='btn mt-2' />
                </form>
            </div>
        </div>
    );
};

export default AddReview;