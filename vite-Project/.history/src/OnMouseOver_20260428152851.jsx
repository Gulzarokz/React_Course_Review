import React, { useState } from 'react'

const OnMouseOver = () => {
    const [data, setData] = useState(0)

    const increment = () => {
        setData(data + 1)
    }
    return (
        <>
            <h3>data</h3>
            <h3>Data: {data}</h3>
            <button onMouseOver={() => setData(decrements)}>update data</button>
        </>
    )
}

export default OnMouseOver
