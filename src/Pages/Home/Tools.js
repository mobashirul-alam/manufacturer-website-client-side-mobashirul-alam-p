import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
    const [tools, setTools] = useState([]);

    useEffect(() => {
        fetch('https://golden-weight-tools.herokuapp.com/tools')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])

    return (
        <div className='my-28'>
            <h1 className='text-center text-5xl font-black mt-8 mb-4'>Our Inventory</h1>
            <hr className='border border-accent w-4/5 lg:w-1/2 mx-auto lg:mb-12' />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8  md:mx-8 lg:mx-12 my-8'>
                {
                    tools.map(tool => <Tool
                        key={tool._id}
                        tool={tool}
                    ></Tool>)
                }
            </div>
            <div className='text-center mt-12'>
                <button className='btn'>All Products</button>
            </div>
        </div>
    );
};

export default Tools;