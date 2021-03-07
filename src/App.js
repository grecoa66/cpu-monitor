import React, { useState, useEffect } from "react";
import useCpu from "./cpu";
import Chart from "./chart";
import { theme } from "./theme";

const toChartData = (rawCpuData) => {
  console.log("rawCpuData", rawCpuData);
  if (rawCpuData.cpuLoad && rawCpuData.time) {
    return {
      name: rawCpuData?.time || "",
      y: rawCpuData?.cpuLoad || "",
    };
  }
};

function App() {
  const [graphData, setGraphData] = useState([]);
  const { cpuLoad, time, count } = useCpu();

  useEffect(() => {
    const formattedData = toChartData({ cpuLoad: cpuLoad, time: time });

    console.log("data", graphData);

    setGraphData([...graphData, formattedData]);
  }, [cpuLoad]);

  return (
    <div className="App">
      <header className="App-header">
        <h2>CPU Monitor</h2>
        <p>CPU LOAD: {cpuLoad}</p>
        <p>Count: {count}</p>
        <Chart data={graphData} />
      </header>
    </div>
  );
}

export default App;
