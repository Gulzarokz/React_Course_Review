import React, { useState } from 'react'

const OnClick = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }
    return (
        <>
            <h3>OnClick</h3>
            <h3>count: {count}</h3>
            <button onClick={() => setCount(increment)}>update Count</button>
        </>
    )
}

export default OnClick
