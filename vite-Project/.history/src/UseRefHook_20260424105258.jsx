import React, { useRef } from 'react'

const UseRefHook = () => {

    const myRef = useRef();

    function modified() {
        // console.log(myRef.current.value);
        // myRef.current.value = "Gulzar khan"
        myRef.current.style.backgroundColor = "yellow"
        myRef.current.style.Color = "white"
        // myRef.current.value = "Gulzar khan"

    }

    return (
        <>
            <h2>UseRef Hook in ReactJs</h2>
            <input type="text" ref={myRef} />
            <button onClick={() => modified()}>Clicked</button>
        </>
    )
}

export default UseRefHook
