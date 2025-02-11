import ListGroup from "./components/Listgroup";

function App() {
    let items = ["New York", "San Francisco", "Miami", "London", "Paris"];

    const handleSelectItem = (item: string) => {
        console.log(item);
    };

    return (
        <div>
            <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
        </div>
    );
}

export default App;
