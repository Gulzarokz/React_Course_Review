import React from 'react'
import './navbar.css'
import DeleteALLUser from './DeleteALLUser'

import { pakeApi } from '../api'

const UserDetails = () => {

    const addNewUser = () => {

    }
    return (
        <>
            <div className="content">

                <div className="Heading">List of user Details
                    <button onClick={() => addNewUser(pakeApi())} className="btn">Add Users</button>
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
