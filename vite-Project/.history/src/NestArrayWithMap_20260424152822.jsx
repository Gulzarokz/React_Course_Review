import React from 'react'

const NestArrayWithMap = () => {

    const employeeInfo = [

        {
            name: "Ali", email: "Ali@gmail.com", Address: [
                { country: "pakistan", city: "kohat", street: "123" },
                { country: "UAE", city: "Sharja", street: "1232" },
                { country: "Bangladesh", city: "dhaka", street: "1243" },
            ]
        },
        {
            name: "Wajid", email: "Wajid@gmail.com", Address: [
                { country: "pakistan", city: "kohat", street: "123" },
                { country: "UAE", city: "Sharja", street: "1232" },
                { country: "Bangladesh", city: "dhaka", street: "1243" },
            ]

        },
        {
            name: "Khan", email: "Khan@gmail.com", Address: [
                { country: "pakistan", city: "kohat", street: "123" },
                { country: "UAE", city: "Sharja", street: "1232" },
                { country: "Bangladesh", city: "dhaka", street: "1243" },
            ]
        },
        {
            name: "Farman", email: "Farman@gmail.com", Address: [
                { country: "pakistan", city: "kohat", street: "123" },
                { country: "UAE", city: "Sharja", street: "1232" },
                { country: "Bangladesh", city: "dhaka", street: "1243" },
            ]
        }
    ]
    return (
        <>
            <h2>Nested Array with map function</h2>

            <table border={1}>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>email</th>
                        <th>Adress</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employeeInfo.map((key, i) =>
                            <tr unique={i}>
                                <td>{key.name}</td>
                                <td>{key.email}</td>
                                <td>
                                    <table border={1}>
                                        <thead>
                                            <tr>
                                                <th>country</th>
                                                <th>city</th>
                                                <th>street</th>
                                            </tr>
                                        </thead>
                                        {
                                            key.Address.map((item, j) =>
                                                <tr data={j}>
                                                    <td>{item.country}</td>
                                                    <td>{item.city}</td>
                                                    <td>{item.street}</td>
                                                </tr>
                                            )
                                        }
                                    </table>
                                </td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
        </>
    )
}

export default NestArrayWithMap
