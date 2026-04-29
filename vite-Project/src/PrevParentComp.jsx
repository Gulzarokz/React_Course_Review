import React, { useState } from 'react'
import PrecChildComp from './PrecChildComp'

const PrevParentComp = () => {
    const [data, setData] = useState(0)

    function update() {
        let randomVal = Math.floor(Math.random() * 10)
        setData(randomVal)
    }
    return (
        <>
            <h2>Previous Parent Component in React js</h2>
            <h3>Current value : {data}</h3>
            <button onClick={update}>updated</button>
            <PrecChildComp item={data} />
        </>
    )
}

export default PrevParentComp
