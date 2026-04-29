import React, { useState } from 'react'

const PostApi = () => {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [salary, setSalary] = useState("")

    const updated = () => {
        // console.log({ name, age, salary });
        let data = { name, age, salary }
        fetch("https://dummy.restapiexample.com/create", {

        })

    }


    return (
        <>
            <h3>Post Api in react js</h3>
            <input
                type="text"
                placeholder='enter your name'
                value={name}
                onChange={(e) => setName(e.target.value)}
            /><br /><br />
            <input
                type="number"
                placeholder='enter your age'
                value={age}
                onChange={(e) => setAge(e.target.value)}
            /><br /><br />
            <input
                type="number"
                placeholder='enter your salary'
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
            /><br /><br />
            <button onClick={updated}>submit</button>
        </>
    )
}

export default PostApi
