import React, { useState } from "react";
import useInterval from "./useInterval";
import Alarm from "./alarm";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
} from "recharts";

// Seed 10 minutes worth of entries to the graph
const initalGraphData = () => {
  const graphDataArray = [];
  while (graphDataArray.length < 60) {
    graphDataArray.push({ name: "", y: 0 });
  }
  return graphDataArray;
};

const toChartData = (data) => {
  const date = new Date(data.time);
  const displayDate = `${date.getMinutes()} : ${date.getSeconds()}`;
  return {
    name: displayDate,
    y: data?.loadAverage,
  };
};

const AverageCpuChart = () => {
  const [graphData, setGraphData] = useState(initalGraphData());
  const [cpuLoad, setCpuLoad] = useState(0);

  const updateChart = (data) => {
    const formattedData = toChartData(data);

    setCpuLoad(data.loadAverage);

    // Pop off the oldest entry
    graphData.shift();

    setGraphData([...graphData, formattedData]);
  };

  useInterval(async () => {
    await fetch("http://localhost:3001/cpu-load", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        updateChart(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, 1000);

  return (
    <>
      <h2>Average CPU Load: {Math.round(cpuLoad * 1000) / 1000}</h2>
      <Alarm graphData={graphData} evaluations={12} />
      <LineChart
        width={800}
        height={500}
        data={graphData}
        margin={{
          top: 20,
          right: 20,
          left: 20,
          bottom: 20,
        }}
      >
        <CartesianGrid strokeDasharray="2" />
        <XAxis dataKey="name" stroke="#fff" />
        <YAxis domain={[0, 4]} tickSize={1} allowDecimals stroke="#fff" />
        <Tooltip />
        <Legend verticalAlign="top" margin={{ bottom: 12 }} />
        <Line name="Avg CPU Load" type="monotone" dataKey="y" stroke="#fff" />
      </LineChart>
    </>
  );
};

export default AverageCpuChart;
