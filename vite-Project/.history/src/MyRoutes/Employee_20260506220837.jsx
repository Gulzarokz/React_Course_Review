import React from 'react'
import { useParams } from 'react-router-dom'

const Employee = () => {
    const { name } = useParams()
    return (
        <div>
            <h1>{name} is employee</h1>
        </div>
    )
}

export default Employee
