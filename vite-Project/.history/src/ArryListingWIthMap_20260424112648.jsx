import React from 'react'

const ArryListingWIthMap = () => {
    const employee = ["Gulzar", "Ali", "Huzaifa", "Wajid"];

    employee.map((item) => {
        console.log(`My name is, ${item}`);

    })

    return (
        <>
            <h2>Array Listing Element with Map function</h2>
        </>
    )
}

export default ArryListingWIthMap
