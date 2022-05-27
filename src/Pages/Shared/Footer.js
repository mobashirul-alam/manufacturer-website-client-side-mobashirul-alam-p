import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-transparent.png';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div>
            <footer className="p-10 bg-base-200 text-base-content">
                <div className="footer">
                    <div >
                        <img className="w-2/5 mx-auto" src={logo} alt="" />
                    </div>
                    <div>
                        <span className="footer-title">Services</span>
                        <Link to='/' className="link link-hover">Branding</Link>
                        <Link to='/' className="link link-hover">Design</Link>
                        <Link to='/' className="link link-hover">Marketing</Link>
                        <Link to='/' className="link link-hover">Advertisement</Link>
                    </div>
                    <div>
                        <span className="footer-title">Company</span>
                        <Link to='/' className="link link-hover">About us</Link>
                        <Link to='/' className="link link-hover">Contact</Link>
                        <Link to='/' className="link link-hover">Jobs</Link>
                        <Link to='/' className="link link-hover">Press kit</Link>
                    </div>
                    <div>
                        <span className="footer-title">Legal</span>
                        <Link to='/' className="link link-hover">Terms of use</Link>
                        <Link to='/' className="link link-hover">Privacy policy</Link>
                        <Link to='/' className="link link-hover">Cookie policy</Link>
                    </div>
                </div>
                <div className="text-center font-medium">
                    <p>Copyright © {year} - All right reserved by Golden Weight Tools</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;