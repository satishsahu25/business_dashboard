import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const SimpleLineChart= ({data,xdatakey,line1key,line2key}) => {
  return (
    <>
      <LineChart
          width={800}
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
          <XAxis dataKey={xdatakey} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey={line1key} stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey={line2key} stroke="#82ca9d" />
        </LineChart>

    </>
  )
}

export default SimpleLineChart