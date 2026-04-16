
import React, { useState } from 'react'

const StateInFunctionalComponent = () => {
    // const [name, setName] = useState("Aiza")


    // function updateName() {
    //     alert(setName("Gulzar"))
    // }
    return (
        <div>
            <h1>{name}</h1>
            <button onClick={updateName}>Click Me!</button>
        </div>
    )
}

export default StateInFunctionalComponent
