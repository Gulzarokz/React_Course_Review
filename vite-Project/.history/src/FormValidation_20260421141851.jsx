import React from 'react'

function FormValidation() {

    function formData() {

    }
    return (
        <>
            <h1>Form validation in React</h1>
            <form onSubmit={formData}>
                <input type="text" placeholder='enter your email' />
                <br />
                <br />
                <input type="text" placeholder='enter your password' />
                <br />
                <br />
                <button>submit</button>
            </form>

        </>
    )
}

export default FormValidation
