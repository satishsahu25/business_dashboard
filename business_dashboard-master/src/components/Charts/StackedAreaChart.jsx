import React from "react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
  
  } from "recharts";

const StackedAreaChart = ({data,area1key,area2key,xdatakey}) => {
  return (
    <>
      <AreaChart
        width={800}
        height={300}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >

        <XAxis dataKey={xdatakey} />
        <CartesianGrid strokeDasharray="3 3" />
        <YAxis />
        <Legend/>
        <Tooltip />
        <Area
          type="monotone"
          dataKey={area1key}
          stackId="1"
          stroke="#8884d8"
          fill="#8884d8"
        />
        <Area
          type="monotone"
          dataKey={area2key}
          stackId="1"
          stroke="#82ca9d"
          fill="#82ca9d"
        />
        {/* <Area
          type="monotone"
          dataKey="amt"
          stackId="1"
          stroke="#ffc658"
          fill="#ffc658"
        /> */}
      </AreaChart>
    </>
  );
};

export default StackedAreaChart;
