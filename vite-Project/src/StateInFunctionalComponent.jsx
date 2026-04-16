
import React, { useState } from 'react'

const StateInFunctionalComponent = () => {
    const [name, setName] = useState("Gulzar")

    function updateName() {
        setName("Aiza")
    }

    return (
        <div>
            <h1>{name}</h1>
            <button onClick={updateName}>Click Me!</button>
        </div>
    )
}

export default StateInFunctionalComponent
