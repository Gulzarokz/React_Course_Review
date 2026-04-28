import React, { useState } from 'react'

const OnClick = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }
    return (
        <>
            <h3>OnClick</h3>
        </>
    )
}

export default OnClick
