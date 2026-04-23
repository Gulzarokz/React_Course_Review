import React, { useContext } from 'react'
import SecondChild from './SecondChild'
import { myData } from './ContextApiHook'
const FirstChild = () => {
    const { } = useContext()
    return (
        <>
            <h3>First Child of context Api</h3>
            <SecondChild />
        </>
    )
}

export default FirstChild
