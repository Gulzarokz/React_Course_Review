import React from 'react'
import EmployeeReuse from './EmployeeReuse'

const ReuseComponent = () => {
    const employeeInfo = [

        { name: "Ali", email: "Ali@gmail.com", contact: 2943958 },
        { name: "Wajid", email: "Wajid@gmail.com", contact: 2949868 },
        { name: "Khan", email: "Khan@gmail.com", contact: 22343958 },
        { name: "Farman", email: "Farman@gmail.com", contact: 2943958 }
    ]
    return (
        <>
            <h2>Reuse Component in React js</h2>
            {
                employeeInfo.map((key, i) =>
                    <EmployeeReuse data={item} />
                )
            }
        </>
    )
}

export default ReuseComponent
