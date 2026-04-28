import React from 'react'

const EmployeeReuse = (prop) => {
    return (
        <>
            <h3>{prop.data.name}</h3>
            <h3>{prop.data.email}</h3>
            <h3>{prop.data.contact}</h3>

        </>
    )
}

export default EmployeeReuse
