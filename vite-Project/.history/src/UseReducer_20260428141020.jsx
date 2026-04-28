import React, { useReducer } from 'react'

intialState = 0
const reducer = (state, action) => {
    switch (action) {
        case : increment;
            return state + 1


        default:
            break;
    }
}

const UseReducer = () => {
    const [count, dispatch] = useReducer(reducer, intialState)
    return (
        <>
            <h3>UseReducer in react js</h3>
            <button onClick={() => dispatch("increment")}>increment</button>
            <button onClick={() => dispatch("increment")}>decrement</button>
        </>
    )
}

export default UseReducer
