import React, { useContext } from 'react'
import SecondChild from './SecondChild'
import { myData } from './ContextApiHook'
const FirstChild = () => {
    const { data } = useContext(myData)
    return (
        <>
            <h3>First Child of context Api</h3>
            <h3>myValue: {data}</h3>
            <SecondChild />
        </>
    )
}

export default FirstChild
