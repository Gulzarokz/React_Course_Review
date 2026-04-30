import React, { useState } from 'react'

const MyCount = () => {
    // const [count, setCount] = useState(0)

    // const increment = () => {
    //     setCount(count + 1)
    // }
    // const decrement = () => {
    //     setCount(count - 1)
    // }
    return (
        <>
            <h2>Custome hooks in react js</h2>
            <h2>count:{count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>decrement</button>
        </>
    )
}

export default MyCount
