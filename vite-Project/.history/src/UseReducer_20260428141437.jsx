import React, { useReducer } from 'react'

const intialState = 0
const reducer = (state, action) => {
    switch (action) {
        case "increment":
            return state + 1

        case "decrement":
            return state - 1


        default:
            return state
    }
}

const UseReducer = () => {
    const [count, dispatch] = useReducer(reducer, intialState)
    return (
        <>
            <h3>UseReducer in react js</h3>
            <h2>{count}</h2>
            <button onClick={() => dispatch("increment")}>increment</button>
            <button onClick={() => dispatch("decrement")}>decrement</button>
        </>
    )
}

export default UseReducer
