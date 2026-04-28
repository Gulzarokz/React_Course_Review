import React, { useRef } from 'react'

const UncontrolledComp = () => {

    const myRef = useRef()

    const myFrom = (e) => {
        e.preventDafault()
        alert(myRef)
    }
    return (
        <>
            <form onSubmit={myFrom} >
                <h3>Uncontrolled Component in react js</h3>
                <input type="text" useRef={myRef} /> <br /> <br />
                <button>submit</button>
            </form>
        </>
    )
}

export default UncontrolledComp
