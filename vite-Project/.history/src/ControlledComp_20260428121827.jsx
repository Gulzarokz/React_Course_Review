import React, { useState } from 'react'

const ControlledComp = () => {
    const [item, setItem] = useState("");
    return (
        <>
            <h2>Controlled Component in react js</h2>
            <input type="text" value={item} onChange={(e) => setItem(e.target.value)} />
        </>
    )
}

export default ControlledComp
