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

const MixedBarChart = ({data,bar1key,bar2key,xdatakey}) => {
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
          <XAxis dataKey={xdatakey} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey={bar1key} stackId="a" fill="#8884d8" />
          {/* <Bar dataKey="amt" stackId="a" fill="#82ca9d" /> */}
          <Bar dataKey={bar2key} fill="#ffc658" />
        </BarChart>
    </>
  )
}

export default MixedBarChart