import React from 'react'
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
  } from "recharts";

const SimpleAreaChart = ({xdatakey,data,area1key}) => {
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
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={xdatakey} />
          <YAxis />
          <Legend/>
          <Tooltip />
          <Area type="monotone" dataKey={area1key} stroke="#8884d8" fill="#8884d8" />
        </AreaChart>

    </>
  )
}

export default SimpleAreaChart