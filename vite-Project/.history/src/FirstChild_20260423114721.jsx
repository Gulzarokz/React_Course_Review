import React, { useContext } from 'react'
import SecondChild from './SecondChild'
import { } from './ContextApiHook'
const FirstChild = () => {
    return (
        <>
            <h3>First Child of context Api</h3>
            <SecondChild />
        </>
    )
}

export default FirstChild
