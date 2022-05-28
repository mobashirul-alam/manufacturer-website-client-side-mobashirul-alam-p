import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../Shared/Loading';

const Dashboard = () => {
    const [user, loading] = useAuthState(auth);
    const [admin] = useAdmin(user);
    console.log(admin)
    if (loading) {
        return <Loading></Loading>;
    }
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboardSidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center">
                {/* <!-- Page content here --> */}
                <h1 className='text-4xl text-accent font-bold mb-4'>Welcome to your Dashboard</h1>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label for="dashboardSidebar" className="drawer-overlay"></label>
                <ul className="menu px-8 py-4 overflow-y-auto bg-base-200 text-base-content font-medium">
                    {/* <!-- Sidebar content here --> */}
                    {
                        !admin && <>
                            <li><Link to={'/dashboard'}>My Orders</Link></li>
                            <li><Link to={'/dashboard/addReview'}>Add a Review</Link></li>
                        </>
                    }
                    <li><Link to={'/dashboard/myProfile'}>My Profile</Link></li>
                    {admin && <>
                        <li><Link to='/dashboard/manageOrder'>Manage Order</Link></li>
                        <li><Link to='/dashboard/addProduct'>Add Product</Link></li>
                        <li><Link to='/dashboard/manageProducts'>Manage Products</Link></li>
                    </>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;