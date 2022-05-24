import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-transparent.png';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div>
            <footer class="p-10 bg-base-200 text-base-content">
                <div class="footer">
                    <div >
                        <img class="w-2/5 mx-auto" src={logo} alt="" />
                    </div>
                    <div>
                        <span class="footer-title">Services</span>
                        <Link to='/' class="link link-hover">Branding</Link>
                        <Link to='/' class="link link-hover">Design</Link>
                        <Link to='/' class="link link-hover">Marketing</Link>
                        <Link to='/' class="link link-hover">Advertisement</Link>
                    </div>
                    <div>
                        <span class="footer-title">Company</span>
                        <Link to='/' class="link link-hover">About us</Link>
                        <Link to='/' class="link link-hover">Contact</Link>
                        <Link to='/' class="link link-hover">Jobs</Link>
                        <Link to='/' class="link link-hover">Press kit</Link>
                    </div>
                    <div>
                        <span class="footer-title">Legal</span>
                        <Link to='/' class="link link-hover">Terms of use</Link>
                        <Link to='/' class="link link-hover">Privacy policy</Link>
                        <Link to='/' class="link link-hover">Cookie policy</Link>
                    </div>
                </div>
                <div class="text-center font-medium">
                    <p>Copyright © {year} - All right reserved by Golden Weight Tools</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;