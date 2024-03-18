// PieChartComponent.jsx
import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChartComponent = () => {
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'red',
        'blue',
        'yellow',
        'green',
        'purple',
        'orange'
      ],
      hoverBackgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)'
      ]
    }]
  };

  return (
    <div>
      <h1>My React Pie Chart</h1>
      <Pie data={data} />
    </div>
  );
}

export default PieChartComponent;
