import React, { useState, useRef } from "react";
import useInterval from "./useInterval";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend } from "recharts";

const toChartData = (rawCpuData) => {
  const date = new Date(rawCpuData.time);
  const displayDate = `${date.getMinutes()} : ${date.getSeconds()}`;
  return {
    name: displayDate,
    y: rawCpuData?.cpuLoad,
  };
};

const initalGraphData = () => {
  const graphDataArray = [];
  while (graphDataArray.length < 60) {
    graphDataArray.push({ name: "", y: 0 });
  }
  return graphDataArray;
};

const AverageCpuChart = () => {
  const [graphData, setGraphData] = useState(initalGraphData());
  const [cpuLoad, setCpuLoad] = useState(0);

  const updateChart = (data) => {
    const formattedData = toChartData({
      cpuLoad: data.loadAverage,
      time: data.time,
    });

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
  }, 10000);

  return (
    <>
      <h2>Average CPU Load: {Math.round(cpuLoad * 1000) / 1000}</h2>
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
        <XAxis dataKey="name" />
        <YAxis domain={[0, 4]} tickSize={1} allowDecimals />
        <Legend verticalAlign="top" margin={{ bottom: 12 }} />
        <Line
          name="Avg CPU Load"
          type="monotone"
          dataKey="y"
          stroke="#82ca9d"
        />
      </LineChart>
    </>
  );
};

export default AverageCpuChart;
