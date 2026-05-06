import React from 'react'
import { useParams } from 'react-router-dom'

const SerachParams = () => {
    const [name, setName] = useParams()
    const myName = name.get('name')
    return (
        <>
            <h1>Search Params</h1>
            <h3>THis is my {myName}</h3>
        </>
    )
}

export default SerachParams
