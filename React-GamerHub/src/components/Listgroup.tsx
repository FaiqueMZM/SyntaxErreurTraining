import { useState } from "react";

function ListGroup() {
    let cities = ["New York", "San Francisco", "Miami", "London", "Paris"];
    
    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <>
            <h1>List Group</h1>
            <ul className="list-group">
                {cities.map((item, index) => (
                    <li
                        className={
                            selectedIndex === index
                                ? "list-group-item active"
                                : "list-group-item"
                        }
                        key={item}
                        onClick={() => {
                            setSelectedIndex(index);
                        }}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
