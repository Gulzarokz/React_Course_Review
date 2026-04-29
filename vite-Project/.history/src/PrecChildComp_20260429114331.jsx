import React, { useEffect, useRef } from 'react'

const PrecChildComp = (prop) => {
    let prevVal = useRef();
    useEffect(() => {

    })
    return (
        <>
            <h2>Prevous child Components</h2>
            <h3> props value:{prop.item}</h3>
        </>
    )
}

export default PrecChildComp
