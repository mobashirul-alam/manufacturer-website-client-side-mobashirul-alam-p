import React, { useState, useEffect } from 'react';
import MakeAdminConfirmModal from './MakeAdminConfirmModal';

const MakeAdmin = () => {
    const [users, setUsers] = useState([]);
    const [makeUserAdmin, setMakeUserAdmin] = useState({});
    useEffect(() => {
        fetch('https://golden-weight-tools.herokuapp.com/allUser', {
            method: "GET",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [users]);

    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Make Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <tr key={user._id} className="hover">
                                <th>{user._id}</th>
                                <td>{user.email}</td>
                                <td>
                                    <button class="btn btn-outline btn-info btn-sm">
                                        {user.role ? user.role : "User"}
                                    </button>
                                </td>
                                <td>
                                    {
                                        !user.role &&
                                        <label
                                            onClick={() => setMakeUserAdmin(user)}
                                            for="make-admin-modal"
                                            className="btn modal-button btn-sm">
                                            Make Admin
                                        </label>
                                    }
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            {makeUserAdmin && <MakeAdminConfirmModal makeUserAdmin={makeUserAdmin} />}
        </div >
    );
};

export default MakeAdmin;