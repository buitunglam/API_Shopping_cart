import React from 'react'
import './Chart.scss';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = ({ title, data, dataKey, grid }) => {
  return (
    <div className="chartContainer">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey={dataKey} />
          <Tooltip />
          {grid ? <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" /> : null}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
