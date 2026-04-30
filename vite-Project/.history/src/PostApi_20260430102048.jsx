import React, { useState } from 'react'

const PostApi = () => {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [salary, setSalary] = useState("")

    const updated = async () => {
        // console.log({ name, age, salary });
        let data = { name, age, salary }
        // fetch("https://cors-anywhere.herokuapp.com/https://dummy.restapiexample.com/api/v1/create", {
        //     method: "POST",
        //     headers: {

        //         "accept": "application/json",
        //         "content-type": "application/json"

        //     },
        //     body: JSON.stringify({
        //         name, age, salary
        //     })
        // }).then((result) => {
        //     console.log(result);

        // })
        const response = await fetch("/api/api/v1/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        // console.log(response);


        const result = await response.json();
        console.log(result);

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
