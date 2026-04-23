import React, { useContext } from 'react'
import { myData } from './ContextApiHook'

const SecondChild = () => {
    const { myData } = useContext();
    return (
        <>
            <h3>Second Child of React js</h3>
        </>
    )
}

export default SecondChild
