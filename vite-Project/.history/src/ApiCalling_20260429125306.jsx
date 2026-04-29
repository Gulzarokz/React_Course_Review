import React, { useEffect } from 'react'

const ApiCalling = () => {

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
            result.json()
        })
    })
    return (
        <>
            <h2>Api calling in react js</h2>
        </>
    )
}

export default ApiCalling
