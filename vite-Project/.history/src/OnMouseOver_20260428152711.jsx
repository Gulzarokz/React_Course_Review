import React, { useState } from 'react'

const OnMouseOver = () => {
    const [data, setData] = useState(0)

    const decrement = () => {
        setData(data + 1)
    }
    return (
        <>
            <h3>data</h3>
            <h3>Data: {data}</h3>
            <button OnMouseOver={() => setData(decrement)}>update data</button>
        </>
    )
}

export default OnMouseOver
