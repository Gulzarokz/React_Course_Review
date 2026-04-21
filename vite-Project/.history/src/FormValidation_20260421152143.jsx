import React, { useState } from 'react'

function FormValidation() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [err, setErr] = useState(false)
    const [errPass, setPassErr] = useState(false)

    function formData(e) {
        e.preventDefault()
    }

    function emailhandler(e) {
        let value = e.target.value
        setEmail(value)

        if (value.length < 5) {
            setErr(true)
        } else {
            setErr(false)
        }
    }

    function passwordhandler(e) {
        let value = e.target.value
        setPassword(value)

        if (value.length < 3) {
            setPassErr(true)
        } else {
            setPassErr(false)
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
                    value={email}
                />

                {err && <span> minimum required 5 characters</span>}

                <br /><br />

                <input
                    type="text"
                    placeholder="enter your password"
                    onChange={passwordhandler}
                    value={password}
                />

                {errPass && <span> minimum required 3 characters</span>}

                <br /><br />

                <button>submit</button>
            </form>
        </>
    )
}

export default FormValidation