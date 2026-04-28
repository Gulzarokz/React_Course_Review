import React from 'react'

const ChildToParent = (prop) => {
    let name = "Gul"
    return (
        <>
            {/* <h3>Hello: {prop.data}</h3> */}
            <button onClick={() => prop.data(name)}>Click</button>
        </>
    )
}

export default ChildToParent
