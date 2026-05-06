import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <>
            <h1>Navbar</h1>
            <ul style={{ display: 'flex', gap: '20px', listStyle: 'none', textDecoration: 'none' }}>
                <li><NavLink to="/home">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </>
    )
}

export default Navbar
