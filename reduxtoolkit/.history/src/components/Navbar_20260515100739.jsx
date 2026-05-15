import React from 'react'
import UserDetails from './UserDetails'

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <ul className="navbar-list">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <UserDetails />
        </>
    )
}

export default Navbar
