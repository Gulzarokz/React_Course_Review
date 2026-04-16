
import React, { useState } from 'react'

const InputFieldValue = () => {
    const [data, setData] = useState("null")

    function inputValue(e) {
        // console.log(e.target.value);
        setData(e.target.value)

    }
    return (
        <div>
            <input type="text" onChange={inputValue} />
        </div>
    )
}

export default InputFieldValue
