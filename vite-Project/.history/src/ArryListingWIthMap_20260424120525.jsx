import React from 'react'

const ArryListingWIthMap = () => {
    const employee = ["Gulzar", "Ali", "Huzaifa", "Wajid"];

    // employee.map((item) => {
    //     console.log(`My name is, ${item}`);

    // })
    // for (let i = 0; i < employee.length; i++) {
    //     console.log("my name is =", employee[i]);

    // }

    const employeeInfo = [

        { name: "Ali", email: "Ali@gmail.com", contact: 2943958 },
        { name: "Wajid", email: "Wajid@gmail.com", contact: 2949868 },
        { name: "Khan", email: "Khan@gmail.com", contact: 22343958 },
        { name: "Farman", email: "Farman@gmail.com", contact: 2943958 }
    ]

    return (
        <>
            <h2>Array Listing Element with Map function</h2>

            <table>
                {
                    employee.map((key) =>
                        <tr>
                            <td>
                                {key.name}
                                {key.email}
                                {key.contact}
                            </td>
                        </tr>
                    )
                }
            </table>

        </>
    )
}

export default ArryListingWIthMap
