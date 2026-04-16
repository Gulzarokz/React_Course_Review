function Props(Props) {
    return (
        <>
            <h1>Hello: {Props.name}</h1>
            <h1>Hello: {Props.gmail}</h1>
            <h1>Hello: {Props.info.salary && Props.info.mobile}</h1>

        </>
    )
}

export default Props;