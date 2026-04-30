import React, { useState } from 'react'

// https://jsonplaceholder.typicode.com/posts

const PostRequestAxios = () => {
    const [post, setPost] = useState({
        title: "",
        body: ""
    })

    const handleInput = (e) => {
        setPost(...post, [e.target.name]: e.target.value)
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
                <button>submit</button>
            </form>
        </>
    )
}

export default PostRequestAxios
