import React from 'react'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from "recharts";

const StackedBarChart = ({data,bar1key,bar2key,xdatakey}) => {
  return (
    <>
     <BarChart
          width={800}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey={xdatakey} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey={bar1key} stackId="a" fill="#8884d8" />
          <Bar dataKey={bar2key} stackId="a" fill="#82ca9d" />
        </BarChart>
    </>
  )
}

export default StackedBarChart