import React from 'react'

const ChildToParent = (prop) => {
    return (
        <>
            {/* <h3>Hello: {prop.data}</h3> */}
            <button onClick={() => prop.data()}>Click</button>
        </>
    )
}

export default ChildToParent
