import React from 'react'

function PassFunctionAsProps(props) {
    return (
        <div>
            <h1>pass Function as props</h1>
            {
                props.data
            }
        </div>
    )
}

export default PassFunctionAsProps
