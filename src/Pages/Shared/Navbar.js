import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-transparent.png';
import auth from '../../firebase.init';
import Loading from './Loading';

const Navbar = () => {
    const [user, loading] = useAuthState(auth);

    const handleLogOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    }

    const menu = <>
        <li><Link to='/myPortfolio' className='whitespace-nowrap'>My Portfolio</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        {
            user && <li><Link to='dashboard'>Dashboard</Link></li>
        }
        <li><Link to='/register'>Register</Link></li>
        <li>{user ?
            <button onClick={handleLogOut} className="font-medium whitespace-nowrap">Log Out</button>
            :
            <Link to='/login'>Login</Link>}</li>
        <li><p className='whitespace-nowrap'>{user && user?.displayName}</p></li>
    </>;

    if (loading) {
        return <Loading></Loading>;
    }

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