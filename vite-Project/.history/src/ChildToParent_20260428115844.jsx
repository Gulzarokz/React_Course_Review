import React from 'react'

const ChildToParent = (prop) => {
    let name = "Gul"
    let user = ["Gulzar", "g@gamil.com", "20094585"]
    return (
        <>
            {/* <h3>Hello: {prop.data}</h3> */}
            <button onClick={() => prop.data(name)}>Click</button>
        </>
    )
}

export default ChildToParent
