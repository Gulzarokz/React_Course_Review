
function CickEvent() {

    let firstName = "Gulzar"

    function sayHello() {
        // alert('Hello, World!')
        firstName = "Gulzar Khan"
        alert(`Hello, ${firstName}!`)

    }
    return (
        <div>
            <h1>{firstName}</h1>
            <h1>Click Event</h1>
            <button onClick={sayHello}>Click Me!</button>
            {/* <button onClick={() => alert('Hello, world!')}>Click Me!</button> */}
        </div >
    )
}

export default CickEvent