import React from 'react'
import ChildToParent from './ChildToParent'

const LiftingUp = () => {
    const user = "Gulzar khan"
    return (
        <>
            <h3>Hello</h3>
            <ChildToParent data={user} />
        </>
    )
}

export default LiftingUp
