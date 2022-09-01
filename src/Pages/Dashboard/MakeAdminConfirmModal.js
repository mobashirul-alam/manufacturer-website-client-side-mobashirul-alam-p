import React from 'react';
import { toast } from 'react-toastify';

const MakeAdminConfirmModal = ({ makeUserAdmin }) => {
    const { _id, email } = makeUserAdmin;
    // console.log(makeUserAdmin)

    const makeAdmin = () => {
        const url = `https://golden-weight-tools.herokuapp.com/allUser/${_id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success(`${email} is being made admin successfully.`)
                // const accessToken = data.token;
                // localStorage.setItem('accessToken', accessToken);
                // setToken(accessToken);
            })
    }

    return (
        <div>
            <input type="checkbox" id="make-admin-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="make-admin-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg">
                        Are you sure to make the email as admin?
                    </h3>
                    <div class="modal-action">
                        <label
                            onClick={makeAdmin}
                            for="make-admin-modal"
                            className="btn">
                            Confirm
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAdminConfirmModal;