import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <>
            <h1>About page</h1>
            <Link to="/employee/gulzar/25">Gulzar</Link><br /><br />
            <Link to="/employee/Ali/30">Ali</Link>
        </>
    )
}

export default About
