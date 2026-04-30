import axios from 'axios'
import React, { useState } from 'react'


const PostRequestAxios = () => {
    const [post, setPost] = useState({
        title: "",
        body: ""
    })

    const handleInput = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/posts', { post }).then((response) => {
            console.log(response);

        })

    }
}
return (
    <>
        <h2>Axios Post request in react</h2>
        <form >
            <input
                type="title"
                name='title'
                onChange={handleInput}
                placeholder='enter your title'
            /><br /><br />
            <input
                type="body"
                name='body'
                onChange={handleInput}
                placeholder='enter description'
            /><br /><br />
            <button onClick={handleSubmit}>submit</button>
        </form>
    </>
)
}

export default PostRequestAxios
