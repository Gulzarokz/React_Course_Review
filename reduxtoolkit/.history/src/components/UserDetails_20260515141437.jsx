import React from 'react'
import './navbar.css'
import DeleteALLUser from './DeleteALLUser'
import { useDispatch } from 'react-redux';
import { addUser } from '../store/Slices/UserSlice';

import { fakeApi } from '../api'

const UserDetails = () => {
    const dispatch = useDispatch();

    const addNewUser = (payload) => {
        console.log(payload)
        dispatch(addUser(payload))
    }
    return (
        <>
            <div className="content">

                <div className="Heading">List of user Details
                    <button onClick={() => addNewUser(fakeApi())} className="btn">Add Users</button>
                    <ul>
                        <li>Name</li>
                        <li>Email</li>
                    </ul>
                </div>
            </div>
            <DeleteALLUser />
        </>
    )
}

export default UserDetails
