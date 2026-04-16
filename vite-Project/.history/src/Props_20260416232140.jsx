function Props(Props) {
    return (
        <>
            <h1>Hello: {Props.name}</h1>
            <h1>Gamil: {Props.gmail}</h1>
            <h1>Salary & Phone: {Props.info.salary && Props.info.mobile}</h1>

        </>
    )
}

export default Props;