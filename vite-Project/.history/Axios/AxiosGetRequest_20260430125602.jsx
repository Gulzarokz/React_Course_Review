import React, { useEffect, useState } from 'react'
import axios from 'axios';
const AxiosGetRequest = () => {
    const [myData, setMyData] = useState([])

    useEffect(() => {
        let url = "https://jsonplaceholder.typicode.com/users";
        axios.get(url).then((response) => {
            setMyData(response.data);

        })
    }, [])

    return (
        <>
            <h1>This is Axios in react js</h1>
            {
                myData.map((key) => {
                    <h2>{key.name}</h2>
                })
            }
        </>
    )
}

export default AxiosGetRequest
