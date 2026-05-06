import React from 'react'
import { useSearchParams } from 'react-router-dom'

const SerachParams = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const myName = searchParams.get('name')
    return (
        <>
            <h1>Search Params</h1>
            <h3>THis is my {myName}</h3>
        </>
    )
}

export default SerachParams
