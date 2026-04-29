import React, { useState } from 'react'

const PostApi = () => {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [salary, setSalary] = useState("")
    return (
        <>
            <h3>Post Api in react js</h3>
            <input
                type="text"
                placeholder='enter your name'
                value={name}
                onChange={(e) => setName(e.target.value)}
            /><br />
            <input
                type="number"
                placeholder='enter your age'
                value={name}
                onChange={(e) => setName(e.target.value)}
            /><br />
            <input
                type="number"
                placeholder='enter your salary'
                value={name}
                onChange={(e) => setName(e.target.value)}
            /><br />
            <button>submit</button>
        </>
    )
}

export default PostApi
