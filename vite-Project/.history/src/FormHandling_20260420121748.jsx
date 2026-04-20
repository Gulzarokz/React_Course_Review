import React, { useState } from "react"
function FormHandling() {


    function getFormValue(e) {

    }
    return (
        <><h1>From handling in react js</h1>
            <form onSubmit={getFormValue}>
                <input type="text" placeholder="Enter your name" />
                <br />

                <select>
                    <h1>Select any one</h1>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                </select>
                <br />

                <input type="checkbox" />
                <br />

                <button>submit</button>


            </form></>



    )
}

export default FormHandling