import React from 'react'

function PassFunctionAsProps(props) {
    return (
        <div>
            <h1>pass Function as props</h1>
            <button onClick={props.data}>click Me!</button>
        </div>
    )
}

export default PassFunctionAsProps
