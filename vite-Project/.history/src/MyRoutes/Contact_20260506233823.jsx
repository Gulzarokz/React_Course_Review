import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
const Contact = () => {

    const navigate = useNavigate()
    return (
        <>
            <h1>Contact page</h1>
            <button onClick={() => navigate('/home')}>go to Home</button>
            <button onClick={() => navigate('/about')}>go to About</button>
        </>
    )
}

export default Contact
