import React, { createContext, useContext, useState } from 'react'
import FirstChild from './FirstChild'


//create, provide, use
export const myData = createContext();
const ContextApiHook = () => {
    const [data, setData] = useState(1);

    return (
        <myData.provide value={{ valueData: data }}>
            <>
                <h2>Context Api in reactjs</h2>
                <h3>{data}</h3>
                <button onClick={() => setData(data + 1)}>updateData</button>
                <FirstChild />
            </>

        </myData.provide>
    )
}

export default ContextApiHook
