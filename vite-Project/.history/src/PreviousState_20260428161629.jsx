import React, { useState } from 'react'

const PreviousState = () => {
    const [state, setState] = useState(0)
    const updateState = (prev) => {
        // console.log(prev);
        // return state + 1

        for (let i = 0; i < 5; i++) {
            setState(prev => prev + 1)
        }
    }
}

{
    return (
        <>
            <h3>Previous State in react js</h3>
            <h3>value: {state}</h3>
            <button onClick={() => setState(updateState)}>stateValue</button>
        </>
    )
}



export default PreviousState
