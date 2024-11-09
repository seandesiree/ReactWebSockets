
import React from 'react';
import { Line } from 'react-chartjs-2';

const RealTimeChart = ({ data }) => {
  return <Line data={data} options={{ responsive: true }} />;
};

export default RealTimeChart;