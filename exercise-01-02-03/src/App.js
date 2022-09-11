import "./App.css";
import ComponentA from "./components/componentA";
import {Contact} from "./models/contact"

function App() {
    const contactDef = new Contact('Pepito', 'Gargollo', 'pep.gar@hotmail.com')

    return (
        <div className="App">
            <ComponentA contact={contactDef}/>
        </div>
    );
}

export default App;