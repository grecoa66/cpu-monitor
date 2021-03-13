import React from "react";
import AverageCpuChart from "./averageCpuChart";
import { theme } from "./theme";

function App() {
  return (
    <div>
      <header className="App-header">
        <h2>CPU Monitor</h2>
      </header>
      <AverageCpuChart />
    </div>
  );
}

export default App;
