import React, { useState } from 'react'

const MyCount = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count + 1)
    }
    return (
        <>
            <h2>Custome hooks in react js</h2>
            <button onClick={() => setCount(increment)}>Increment</button>
            <button onClick={() => setCount(decrement)}>decrement</button>
        </>
    )
}

export default MyCount
