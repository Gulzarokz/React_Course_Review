import React, { useState } from 'react'

function FormValidation() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    connt[err, setErr] = useState(false)


    function formData(e) {
        e.preventDefault();
    }

    function emailhandler(e) {
        // console.log(e.target.value);
        let element = e.target.value
        if (element.length > 3) {
            setErr(true)
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

                {err ?
                    <span>
                        minimum required 3 letters
                    </span> :
                    <span></span>
                }
                <br />
                <br />
                <input type="text" placeholder='enter your password' />
                <br />
                <br />
                <button>submit</button>
            </form >

        </>
    )
}

export default FormValidation
