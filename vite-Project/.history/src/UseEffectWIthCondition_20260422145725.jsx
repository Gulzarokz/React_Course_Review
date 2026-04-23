import React, { useEffect, useState } from 'react'

const UseEffectWIthCondition = () => {
    const [age, setAge] = useState(21)
    const [count, setCount] = useState()

    useEffect(() => {
        console.log("useEffect called here");

    })
    return (
        <>
            <h2>UseEffect with Condition in Reactjs</h2>
            <h3>age:{age}</h3>
            <h3>count:{count}</h3>
            <button onClick={() => setAge(age + 1)}>update age</button>
            <button onClick={() => setCount(count + 1)}>update age</button>

        </>
    )
}

export default UseEffectWIthCondition
