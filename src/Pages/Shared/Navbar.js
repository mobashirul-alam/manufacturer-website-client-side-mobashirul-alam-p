import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-transparent.png';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);

    const menu = <>
        <li><Link to='/myPortfolio'>My Portfolio</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        {
            user && <li><Link to='dashboard'>Dashboard</Link></li>
        }
        <li><Link to='/register'>Register</Link></li>
        <li>{user ?
            <button onClick={() => signOut(auth)} className="font-medium">Log Out</button>
            :
            <Link to='/login'>Login</Link>}</li>
        <li><p>{user && user?.displayName}</p></li>
    </>;

    return (
        <div className="navbar bg-base-100 lg:px-6 sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-medium">
                        {menu}
                    </ul>
                </div>
                <Link to='/home' className="btn btn-ghost normal-case text-xl">
                    <img width={45} src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-end hidden lg:flex font-medium">
                <ul className="menu menu-horizontal p-0">
                    {menu}
                </ul>
            </div>
            {/* ----- open dashboard sidebar ----- */}
            <div className='navbar-end lg:hidden'>
                <label for="dashboardSidebar" tabindex="1" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;