import React, { useReducer } from 'react'

intialState = 0
const reducer = (state, action) => {
    switch (action) {
        case state + 1:
            return


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
