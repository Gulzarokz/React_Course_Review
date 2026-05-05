import axios from 'axios'
import React, { useEffect } from 'react'

const DeleteRequest = () => {

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1').then((resposne) => {
            console.log(resposne.data);

        })
    })
    return (
        <>
            <h2>Delete Request in react js</h2>

        </>
    )
}

export default DeleteRequest
