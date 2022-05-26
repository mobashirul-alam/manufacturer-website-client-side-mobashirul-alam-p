import React from 'react';
import user from '../../assets/icon/Places-user-identity-icon.png';
import html from '../../assets/skills/html-5-icon.png';
import css from '../../assets/skills/css-3-icon.png';
import javascript from '../../assets/skills/javascript-icon.png';
import react from '../../assets/skills/react.png';
import firebase from '../../assets/skills/firebase.svg';
import mongodb from '../../assets/skills/mongodb.svg';

const MyPortfolio = () => {
    return (
        <div className='my-12'>
            <div>
                <img className='mx-auto border-2 border-slate-400 rounded-md p-3' src={user} alt="" />
            </div>
            <div className='text-xl text-center mt-4'>
                <p><span className='font-semibold'>Name: </span> Md. Mobashirul Alam Seam</p>
                <p><span className='font-semibold'>Email : </span> mobashirulalamseam@gmail.com</p>
                <p className='md:w-3/4 lg:w-1/2 mx-auto'><span className='font-semibold'>Educational Info : </span>
                    I've passed SSC at 2017 as a student of Chittagong Govt. High School, Chittagong under Chittagong Board.
                    I've completed HSC at 2019 as a student of Hajera Taju Degree College, Chittagong under Chittagong Board.
                    Now, I'm continuing my study in "Bachelor of Science(BSc.) in Mathematics" from Chittagong College, Chittagong under National University, Gazipur.
                </p>
            </div>
            <div className='flex justify-center flex-wrap gap-8 mt-8'>
                <h1 className='text-xl text-center font-semibold my-auto'>My Skills :</h1>
                <div><img src={html} alt="" /></div>
                <div><img src={css} alt="" /></div>
                <div><img src={javascript} alt="" /></div>
                <div><img width={88} className='mt-1' src={react} alt="" /></div>
                <div><img className='w-40 my-6' src={mongodb} alt="" /></div>
                <img className='w-40' src={firebase} alt="" />
            </div>
            <div className='text-center mt-8'>
                <p className='font-semibold text-2xl underline mb-2'>Some of my Project Live site</p>
                <div className='flex flex-col text-lg text-primary'>
                    <a target='_blank' rel="noreferrer" href="https://fitness-pro-equipment-house.web.app/">
                        https://fitness-pro-equipment-house.web.app/
                    </a>
                    <a target='_blank' rel="noreferrer" href="https://pro-fit-personal-trainer.web.app/">
                        https://pro-fit-personal-trainer.web.app/
                    </a>
                    <a target='_blank' rel="noreferrer" href="https://golden-profiterole-0fa645.netlify.app/">
                        https://golden-profiterole-0fa645.netlify.app/
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;