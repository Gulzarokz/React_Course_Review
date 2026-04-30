import axios from 'axios'
import React, { useEffect, useState } from 'react'

const PutAxioRequest = () => {

    const [post, setPost] = useState({
        title: "",
        body: ""
    })
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1').then((result) => {
            console.log(result.data);


        })
    }, [])

    const handleInput = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put('https://jsonplaceholder.typicode.com/posts/1', { post }).then((response) => {
            console.log(response.data);

        })
    }
    return (
        <>
            <h2>Axios put request in react js</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="title"
                    placeholder='enter your title'
                    name='title'
                    onChange={handleInput}

                /><br /><br />
                <input
                    type="title"
                    placeholder='enter your description'
                    name='body'
                    onChange={handleInput}

                /><br /><br />
                <button onClick={handleSubmit}>submit</button>
            </form>
        </>
    )
}

export default PutAxioRequest
