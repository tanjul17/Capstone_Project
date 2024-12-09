// src/components/Charts/PieChart.js
import React from "react";
import { Pie } from "react-chartjs-2";

const PieChart = () => {
  const data = {
    labels: ["FinTech", "HealthTech", "EdTech", "Others"],
    datasets: [
      {
        data: [40, 25, 20, 15],
        backgroundColor: ["#ff6384", "#36a2eb", "#cc65fe", "#ffce56"],
      },
    ],
  };

  return <Pie data={data} />;
};

export default PieChart;
