import React, { useState } from "react"
function FormHandling() {
    return (
        <h1>From handling in react js</h1>
        <form onSubmit={getFromValue()}>
            <input type="text" placeholder="Enter name" />
        </form>



    )
}

export default FormHandling