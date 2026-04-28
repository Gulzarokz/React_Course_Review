import React from 'react'

const UncontrolledComp = () => {

    const myFrom = (e) => {
        e.preventDafault()
    }
    return (
        <>
            <form onSubmit={myFrom} >
                <h3>Uncontrolled Component in react js</h3>
                <input type="text" /> <br /> <br />
                <button>submit</button>
            </form>
        </>
    )
}

export default UncontrolledComp
