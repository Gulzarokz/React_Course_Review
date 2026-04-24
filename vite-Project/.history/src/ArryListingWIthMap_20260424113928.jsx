import React from 'react'

const ArryListingWIthMap = () => {
    const employee = ["Gulzar", "Ali", "Huzaifa", "Wajid"];

    // employee.map((item) => {
    //     console.log(`My name is, ${item}`);

    // })
    // for (let i = 0; i < employee.length; i++) {
    //     console.log("my name is =", employee[i]);

    // }

    return (
        <>
            <h2>Array Listing Element with Map function</h2>
            {
                employee.map((key) =>
                    <h3>{key}</h3>

                )
            }
        </>
    )
}

export default ArryListingWIthMap
