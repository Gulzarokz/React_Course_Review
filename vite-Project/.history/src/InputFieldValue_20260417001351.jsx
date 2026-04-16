
import React, { useState } from 'react'

const InputFieldValue = () => {
    const [data, setData] = useState(null)
    const [print, setPrint] = useState(false)

    function inputValue(e) {
        // console.log(e.target.value);
        setData(e.target.value)

    }
    return (
        <div>

            {
                print ? <h1>{data}</h1> : null
            }

            // <h1>{data}</h1>
            <input type="text" onChange={inputValue} />
            <button onClick={() => { }}>Display Value</button>
        </div>
    )
}

export default InputFieldValue
