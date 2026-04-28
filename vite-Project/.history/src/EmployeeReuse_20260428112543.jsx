import React from 'react'

const EmployeeReuse = (prop) => {
    return (
        <>
            <h3>{prop.name}</h3>
            <h3>{prop.email}</h3>
            <h3>{prop.contact}</h3>
        </>
    )
}

export default EmployeeReuse
