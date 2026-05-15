import React from 'react'
import DeleteALLUser from './DeleteALLUser'

const UserDetails = () => {
    return (
        <>
            <div className="content">
                <div className="user-details">
                    <div className="Heading">List of user Details</div>
                    <button className="">Add Users</button>
                </div>
                <ul>
                    <li>Name: John Doe</li>
                    <li>Email: johndoe@example.com</li>
                </ul>

            </div>
            <DeleteALLUser />
        </>
    )
}

export default UserDetails
