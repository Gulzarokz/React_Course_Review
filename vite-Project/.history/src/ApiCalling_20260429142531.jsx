import React, { useEffect, useState } from 'react'

const ApiCalling = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
            result.json().then((response) => {
                // console.log(response);
                setData(response)

            })
        })
    })
    return (
        <>
            <h2>Api calling in react js</h2>
            <table border={1} style={{ background: "red", color: 'white' }}>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>Name</td>
                        <td>UName</td>
                        <td>Email</td>
                        <td>phone</td>
                        <td>Website</td>
                    </tr>
                </thead>

                <tbody>
                    {
                        data.map((key) =>
                            <tr>
                                <td>{key.id}</td>
                                <td>{key.name}</td>
                                <td>{key.username}</td>
                                <td>{key.email}</td>
                                <td>{key.phone}</td>
                                <td>{key.website}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    )
}

export default ApiCalling
