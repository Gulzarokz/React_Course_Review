import React from 'react'
import './navbar.css'
import DeleteALLUser from './DeleteALLUser'

const UserDetails = () => {
    return (
        <>
            <div className="content">

                <div className="Heading">List of user Details
                    <button className="btn">Add Users</button>
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
