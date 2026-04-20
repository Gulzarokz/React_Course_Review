import React, { useState } from "react"
function FormHandling() {
    const [name, setName] = useState("")
    const [option, setOption] = useState("")
    const [agree, setAgree] = useState()

    function getFormValue(e) {
        e.preventDefault()
        console.log(name, option, agree);

    }
    return (
        <><h1>From handling in react js</h1>
            <form onSubmit={getFormValue}>
                <input type="text" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />
                <br />

                <select onChange={(e) => setOption(e.target.value)}>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                </select>
                <br />

                <input type="checkbox" onChange={(e) => setAgree(e.target.checked)} />
                <br />

                <button >submit</button>


            </form></>



    )
}

export default FormHandling