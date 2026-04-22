import React from 'react'

function HooksUseState() {
    const [name, setName] = ("Gulzar khan")
    return (
        <div>
            <h2>Hooks in reactjs </h2>
            <h3>{name}</h3>
            <button onClick={() => setName("Ali khan")}>Click Me!</button>
        </div>
    )
}

export default HooksUseState
