import React, { useEffect, useState } from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <h1 className='text-center text-5xl mt-20'>Customers Talk ...</h1>
            <hr className='border border-accent w-4/5 lg:w-1/2 mx-auto mt-6 mb-8' />
            <div className='flex flex-wrap justify-center gap-10'>
                {
                    reviews.map(r => <>
                        <div class="card w-96 bg-base-100 shadow-2xl">
                            <div class="card-body mx-auto">
                                <h2 class="card-title text-green-700">{r.userName}</h2>
                                <hr />
                                <h2 class="card-title text-primary  text-base font-bold">Rating : {r.rating}</h2>
                                <hr />
                                <p>{r.comment}</p>
                            </div>
                        </div>
                    </>)
                }
            </div>
        </div>
    );
};

export default Reviews;