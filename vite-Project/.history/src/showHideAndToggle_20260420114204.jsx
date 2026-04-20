import React, { useState } from 'react'

const ShowHideAndToggle = () => {
    const [result, setResult] = useState(true)
    return (
        <div>
            <h1>Show Hide and Toggle </h1>
            {
                result ? <h3>Hide or show me....</h3> : null
            }

            <button onClick={() => setResult(true)}>show</button>
            <button onClick={() => setResult(false)}>Hide</button>
        </div>
    )
}

export default ShowHideAndToggle
