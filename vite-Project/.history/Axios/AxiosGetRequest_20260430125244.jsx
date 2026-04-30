import React from 'react'
import axios from 'axios';
const AxiosGetRequest = () => {

    let url = "https://jsonplaceholder.typicode.com/users";
    axios.get(url).then((response) => {
        console.log(response);

    })

    return (
        <>
            <h1>This is Axios in react js</h1>
        </>
    )
}

export default AxiosGetRequest
