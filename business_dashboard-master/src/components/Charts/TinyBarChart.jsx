import React from "react";
import {
  BarChart,
  Bar,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const TinyBarChart = ({ data, bar1key, bar2key }) => {
  return (
    <>
      <BarChart width={800} height={300} data={data}>
        <Bar dataKey={bar1key} fill="#8884d8" />
        <Bar dataKey={bar2key} fill="#8884d8" />
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <YAxis />
        <Legend />
        <Tooltip />
      </BarChart>
    </>
  );
};

export default TinyBarChart;
