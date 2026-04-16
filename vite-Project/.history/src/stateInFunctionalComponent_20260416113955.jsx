
import React, { useState } from 'react'

const tateInFunctionalComponent = () => {
    const [name, setName] = useState("Aiza")


    function updateName() {
        alert(setName)
    }
    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
}

export default stateInFunctionalComponent
