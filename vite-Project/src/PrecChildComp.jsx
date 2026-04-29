import React, { useEffect, useRef } from 'react'

const PrecChildComp = (prop) => {
    let prevVal = useRef();
    useEffect(() => {
        prevVal.current = prop.item
    })
    const propValue = prevVal.current
    return (
        <>
            <h2>Prevous child Components</h2>
            <h3> props value:{prop.item}</h3>
            <h3> prev value:{propValue}</h3>
        </>
    )
}

export default PrecChildComp
