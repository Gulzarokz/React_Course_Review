import React from 'react'

const ChildToParent = (prop) => {
    // let name = "Gul"
    // let user = ["Gulzar", "g@gamil.com", "20094585"]
    let user = { name: "Gul", email: "gokz@gmail.com", contact: "033453345" }
    return (
        <>
            {/* <h3>Hello: {prop.data}</h3> */}
            <button onClick={() => prop.data(user)}>Click</button>
        </>
    )
}

export default ChildToParent
