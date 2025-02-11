import ListGroup from "./components/Listgroup";

function App() {
    let items = ["New York", "San Francisco", "Miami", "London", "Paris"];


    return (
        <div>
            <ListGroup items={items} heading="Cities" />
        </div>
    );
}

export default App;