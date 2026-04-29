import React, { useEffect, useRef } from 'react'

const PrecChildComp = (prop) => {
    let prevVal = useRef();
    useEffect(() => {
        prevVal.current = prop.item
    })
    const
    return (
        <>
            <h2>Prevous child Components</h2>
            <h3> props value:{prop.item}</h3>
            <h3> prev value:{ }</h3>
        </>
    )
}

export default PrecChildComp
