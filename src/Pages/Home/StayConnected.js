import React from 'react';
import fbLogo from '../../assets/icon/Facebook-icon.png';
import twitterLogo from '../../assets/icon/Twitter-icon.png';
import linkedInLogo from '../../assets/icon/Linkedin-icon.png';
import youtubeLogo from '../../assets/icon/Youtube-icon.png';
import phone from '../../assets/icon/Phone-icon.png';
import location from '../../assets/icon/Gps-icon.png';
import email from '../../assets/icon/envelope-icon.png';

const StayConnected = () => {
    return (
        <div className="bg-base-300 p-12">
            <div className="flex flex-col w-full lg:flex-row justify-around">
                <div className="card bg-base-300 place-items-center">
                    <div>
                        <p className="font-bold text-xl mb-2 text-slate-500">Social</p>
                        <p className="font-medium text-base mb-6">Stay connected with us in social platform</p>
                        <div className="flex gap-3">
                            <img src={fbLogo} alt="" />
                            <img src={twitterLogo} alt="" />
                            <img src={linkedInLogo} alt="" />
                            <img src={youtubeLogo} alt="" />
                        </div>
                    </div>
                </div>
                <div className="card bg-base-300 place-items-center">
                    <div>
                        <p className="font-bold text-xl mb-2 text-slate-500">Contact Us</p>
                        <p className="flex items-center gap-3 font-medium"><img src={phone} alt="" /> +008 1313 4345 333</p>
                        <p className="flex items-center gap-3 font-medium"><img src={email} alt="" /> goldenweight@tools.com</p>
                        <p className="flex items-center gap-3 font-medium"><img src={location} alt="" /> 221B Baker Street, London, England</p>
                    </div>
                </div>
                <div className="card bg-base-300 place-items-center">
                    <div>
                        <p className="font-bold text-xl ml-1 text-slate-500">Newsletter</p>
                        <div className="form-control w-80">
                            <label className="label">
                                <span className="label-text font-medium text-base">Subscribe to stay updated about us.</span>
                            </label>
                            <div className="relative">
                                <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                                <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StayConnected;