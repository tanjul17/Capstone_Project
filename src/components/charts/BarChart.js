// src/components/Charts/BarChart.js
import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  const data = {
    labels: ["Q1", "Q2", "Q3", "Q4"],
    datasets: [
      {
        label: "Investments (in USD)",
        data: [12000, 15000, 8000, 20000],
        backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9"],
      },
    ],
  };

  return <Bar data={data} />;
};

export default BarChart;
