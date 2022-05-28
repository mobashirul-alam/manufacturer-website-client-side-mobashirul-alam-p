import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboardSidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col items-center">
                {/* <!-- Page content here --> */}
                <h1 className='text-4xl text-accent font-bold mb-4'>Welcome to your Dashboard</h1>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="dashboardSidebar" class="drawer-overlay"></label>
                <ul class="menu px-8 py-4 overflow-y-auto bg-base-200 text-base-content font-medium">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to={'/dashboard'}>My Orders</Link></li>
                    <li><Link to={'/dashboard/addReview'}>Add a Review</Link></li>
                    <li><Link to={'/dashboard/myProfile'}>My Profile</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;