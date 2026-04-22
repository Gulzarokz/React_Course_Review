import React, { useState } from 'react'

function UseEffectHook() {

    const [count, setCount] = useState()
    return (
        <>
            <h2>useEffect in Hooks</h2>
            <h3>count: {count}</h3>
            <button onClick={() => setCount(count + 1)}>Counter</button>
        </>
    )
}

export default UseEffectHook
