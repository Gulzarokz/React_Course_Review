import React from 'react'
import { useSearchParams } from 'react-router-dom'

const SerachParams = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const myName = searchParams.get('name')
    const myAge = searchParams.get('age')
    return (
        <>
            <h1>Search Params</h1>
            <h3>THis is my {myName} and my age is {myAge}</h3>
            <button onClick={() => setSearchParams}>set Detail</button>
        </>
    )
}

export default SerachParams
