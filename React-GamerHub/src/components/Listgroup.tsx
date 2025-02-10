function ListGroup() {
    let cities = ["New York", "San Francisco", "Miami", "London", "Paris"];

    return (
        <>
            <h1>List Group</h1>
            <ul className="list-group">
                {cities.map((item) => (
                    <li
                        className="list-group-item"
                        key={item}
                        onClick={() => console.log(item)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
