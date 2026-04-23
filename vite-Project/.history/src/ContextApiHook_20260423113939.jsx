import React, { useContext, useState } from 'react'
import FirstChild from './FirstChild'


//create, provide, use
const myData = useContext();
const ContextApiHook = () => {
    const [data, setData] = useState();

    return (

        <>
            <h2>Context Api in reactjs</h2>
            <h3>{data}</h3>
            <button onClick={() => setData(data + 1)}>updateData</button>
            <FirstChild />
        </>
    )
}

export default ContextApiHook
