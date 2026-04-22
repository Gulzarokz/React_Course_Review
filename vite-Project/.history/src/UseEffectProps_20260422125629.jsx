import React, { useEffect } from 'react'

function UseEffectProps(Props) {

    useEffect(() => {
        console.log("useEffect in react js", Props);

    })
    return (
        <>
            <h2>useEffect in react js</h2>

            <h3>{Props.data.count}</h3>


        </>
    )
}

export default UseEffectProps
