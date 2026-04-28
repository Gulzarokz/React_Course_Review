import React from 'react'
import ChildToParent from './ChildToParent'

const LiftingUp = () => {
    // const user = "Gulzar khan"
    function sayHello() {
        alert("Hello:")
    }
    return (
        <>
            <h3>Lifting Up in React js</h3>
            <ChildToParent data={sayHello} />
        </>
    )
}

export default LiftingUp
