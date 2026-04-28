import React, { useState } from 'react'

const ControlledComp = () => {
    const [item, setItem] = useState("");
    return (
        <>
            <h2>Controlled Component in react js</h2>
            <h3>Hello: {item}</h3>
            {/* <input type="text" value={item} onChange={(e) => setItem(e.target.value)} /> */}
            <input type="text" defaultValue={"gulzar"} onChange={(e) => setItem(e.target.value)} />
        </>
    )
}

export default ControlledComp
