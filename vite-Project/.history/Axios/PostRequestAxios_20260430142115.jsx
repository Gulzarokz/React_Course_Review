import React from 'react'

// https://jsonplaceholder.typicode.com/posts

const PostRequestAxios = () => {
    return (
        <>
            <h2>Axios Post request in react</h2>
            <form >
                <input
                    type="title"
                    name='title'
                    placeholder='enter your title'
                />
                <input
                    type="body"
                    name='body'
                    placeholder='enter description'
                />
            </form>
        </>
    )
}

export default PostRequestAxios
