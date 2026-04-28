import React, { useReducer } from 'react'

intialState = 0


const UseReducer = () => {
    const [count, dispatch] = useReducer(reducer, intialState)
    return (
        <>
            <h3>UseReducer in react js</h3>
        </>
    )
}

export default UseReducer
