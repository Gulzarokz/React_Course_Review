import React, { useState } from 'react'

function FormValidation() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [err, setErr] = useState(false)
    const [errPass, setPassErr] = useState(false)


    function formData(e) {
        e.preventDefault();
    }

    function passwordhandler(e) {
        // console.log(e.target.value);
        let element = e.target.value
        if (element.length > 3) {
            setErr(element)
        }
        else {
            setErr(element)
        }


    }
    function emailhandler(e) {
        // console.log(e.target.value);
        let value = e.target.value
        if (element.length > 5) {
            setPassErr(value)
        }
        else {
            setPassErr(value)
        }


    }
    return (
        <>
            <h1>Form validation in React</h1>
            <form onSubmit={formData}>
                <input
                    type="text"
                    placeholder="enter your email"
                    onChange={emailhandler}

                />
                {
                    err ? <span>minimum required 3 character</span> : <span></span>
                }
                <br />
                <br />
                <input
                    type="text"
                    placeholder='enter your password'
                    onChange={passwordhandler}
                />
                {
                    errPass ? <span>minimum requied 5 charcter</span> : <span></span>
                }
                <br />
                <br />
                <button>submit</button>
            </form >

        </>
    )
}

export default FormValidation
