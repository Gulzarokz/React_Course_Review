import React from 'react'

function FormValidation(e) {
    console.log(e.target.value);


}
function formData(e) {
    e.preventDefault();
}

function emailhandler() {

}
return (
    <>
        <h1>Form validation in React</h1>
        <form onSubmit={formData}>
            <input type="text" placeholder='enter your email' onChange={emailhandler} />
            <br />
            <br />
            <input type="text" placeholder='enter your password' />
            <br />
            <br />
            <button>submit</button>
        </form>

    </>
)


export default FormValidation
