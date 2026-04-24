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
        </>
    )
}

export default NestArrayWithMap
