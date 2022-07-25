import logo from "./logo.svg";
import "./App.css";
import { GenericButton } from "@monorepo/library";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <GenericButton colourScheme="teal">Teal</GenericButton>
                <GenericButton colourScheme="teal" disabled={true}>
                    Teal
                </GenericButton>
            </header>
        </div>
    );
}

export default App;
