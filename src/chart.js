import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend } from "recharts";

const Chart = (data) => {
  console.log("CHART : ", data);
  return (
    <div>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Legend />
        <Line
          type="monotone"
          dataKey="y"
          stroke="#82ca9d"
          dot={{ stroke: "red", strokeWidth: 2 }}
        />
      </LineChart>
    </div>
  );
};

export default Chart;
