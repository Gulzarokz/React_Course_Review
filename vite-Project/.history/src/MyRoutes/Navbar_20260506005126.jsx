import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <>
            <h1>Navbar</h1>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to={"about"}>About</Link></li>
            </ul>
        </>
    )
}

export default Navbar
