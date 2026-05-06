import React from 'react'
import { useParams } from 'react-router-dom'

const Employee = () => {
    const { name, age } = useParams()
    return (
        <div>
            <h1>{name} is employee and his {age}</h1>
        </div>
    )
}

export default Employee
