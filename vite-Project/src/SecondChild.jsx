import React, { useContext } from 'react'
import { myData } from './ContextApiHook'

const SecondChild = () => {
    const { data } = useContext(myData);
    return (
        <>
            <h3>Second Child of React js</h3>
            <h3>Data in Second child: {data}</h3>
        </>
    )
}

export default SecondChild
