import axios from 'axios'
import React, { useEffect, useState } from 'react'

const PutAxioRequest = () => {

    const [post, setPost] = useState({
        title: "",
        body: ""
    })
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1').then((response) => {
            console.log(response);

        })
    })

    const handleInput = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {

    }
    return (
        <>
            <h2>Axios put request in react js</h2>

            <form>
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
