import React from 'react'

const ListingArrayWIthMap = () => {

    const employeeInfo = [

        { name: "Ali", email: "Ali@gmail.com", contact: 2943958 },
        { name: "Wajid", email: "Wajid@gmail.com", contact: 2949868 },
        { name: "Khan", email: "Khan@gmail.com", contact: 22343958 },
        { name: "Farman", email: "Farman@gmail.com", contact: 2943958 }
    ]

    return (
        <>
            <h2>Listing Array element with map functin</h2>

            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employeeInfo.map((emp) =>
                            <tr key={emp.email}>
                                <td>{emp.name}</td>
                                <td>{emp.email}</td>
                                <td>{emp.contact}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>

        </>
    )
}

export default ListingArrayWIthMap
