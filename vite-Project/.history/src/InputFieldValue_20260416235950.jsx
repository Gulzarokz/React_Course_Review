
import React, { useState } from 'react'

const InputFieldValue = () => {
    const [data, setData] = useState(null)

    function inputValue(e) {
        console.log(e);

    }
    return (
        <div>
            <input type="text" />
        </div>
    )
}

export default InputFieldValue
