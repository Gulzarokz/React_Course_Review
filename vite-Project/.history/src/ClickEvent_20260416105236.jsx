
function CickEvent() {
    function sayHello() {
        alert('Hello, World!')
    }
    return (
        <div>
            <h1>Click Event</h1>
            <button onClick={sayHello}>Click Me!</button>
        </div >
    )
}

export default CickEvent