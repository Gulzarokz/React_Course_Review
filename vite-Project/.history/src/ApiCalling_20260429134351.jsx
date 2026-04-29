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
            <table border={1}>
                <thead>
                    <tr>
                        <td></td>
                    </tr>
                </thead>
            </table>
        </>
    )
}

export default ApiCalling
