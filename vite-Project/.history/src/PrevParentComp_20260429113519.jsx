import React, { useState } from 'react'
import PrecChildComp from './PrecChildComp'

const PrevParentComp = () => {
    const [data, setData] = useState(0)

    function update() {
        setData(math.floor(math.random() * 10))
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
