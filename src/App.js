import logo from "./logo.svg";
import useCpu from "./cpu";
import { theme } from "./theme";

function App() {
  const { cpuLoad, count } = useCpu();
  return (
    <div className="App">
      <header className="App-header">
        <h2>CPU Monitor</h2>
        <p>CPU LOAD: {cpuLoad}</p>
        <p>Count: {count}</p>
      </header>
    </div>
  );
}

export default App;
