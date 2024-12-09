import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import { LineChart, Line } from "recharts";
import { useNavigate } from "react-router-dom"; // Make sure to import useNavigate for navigation

const StartupDashboard = () => {
  const navigate = useNavigate();
  const [startups, setStartups] = useState([
    {
      id: 1,
      logoUrl: "https://via.placeholder.com/50",
      startupName: "TechNova",
      industry: "Technology",
      city: "San Francisco",
      fundingStage: "Series A",
      website: "https://technova.com",
    },
    {
      id: 2,
      logoUrl: "https://via.placeholder.com/50",
      startupName: "HealthSphere",
      industry: "Healthcare",
      city: "New York",
      fundingStage: "Seed",
      website: "https://healthsphere.com",
    },
    {
      id: 3,
      logoUrl: "https://via.placeholder.com/50",
      startupName: "EduGenius",
      industry: "Education",
      city: "Chicago",
      fundingStage: "Series B",
      website: "https://edugenius.com",
    },
  ]);

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  // Aggregated data for visualizations
  const pieChartData = [
    { name: "Technology", count: 1 },
    { name: "Healthcare", count: 1 },
    { name: "Education", count: 1 },
  ];

  const barChartData = [
    { fundingStage: "Seed", count: 1 },
    { fundingStage: "Series A", count: 1 },
    { fundingStage: "Series B", count: 1 },
  ];

  const lineChartData = [
    { fundingStage: "Seed", count: 1 },
    { fundingStage: "Series A", count: 2 },
    { fundingStage: "Series B", count: 3 },
  ];

  // Handle delete startup
  const handleDelete = (id) => {
    const updatedStartups = startups.filter((startup) => startup.id !== id);
    setStartups(updatedStartups);
    alert("Startup deleted successfully!");
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Startup Dashboard</h2>

      {/* Add Startup Button */}
      <div className="d-flex justify-content-end mb-3">
        <button
          className="btn btn-success mx-3"
          onClick={() => navigate('/AddNewStartup')}
        >
          Start a Startup
        </button>
      </div>

      {/* Visualization Section */}
      <div className="row">
        <div className="col-md-4">
          <h5>Industry Distribution</h5>
          <PieChart width={400} height={400}>
            <Pie
              data={pieChartData}
              dataKey="count"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={150}
              fill="#8884d8"
              label
            >
              {pieChartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>

        <div className="col-md-4">
          <h5>Funding Stages</h5>
          <BarChart
            width={400}
            height={400}
            data={barChartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="fundingStage" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#82ca9d" />
          </BarChart>
        </div>

        <div className="col-md-4">
          <h5>Startup Progress Over Time</h5>
          <LineChart
            width={400}
            height={400}
            data={lineChartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="fundingStage" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="count" stroke="#8884d8" />
          </LineChart>
        </div>
      </div>

      {/* Registered Startups Table */}
      <div className="mt-5">
        <h5>Registered Startups</h5>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Logo</th>
              <th>Name</th>
              <th>Industry</th>
              <th>City</th>
              <th>Funding Stage</th>
              <th>Website</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {startups.map((startup) => (
              <tr key={startup.id}>
                <td>
                  <img src={startup.logoUrl} alt={startup.name} width="50" />
                </td>
                <td>{startup.startupName}</td>
                <td>{startup.industry}</td>
                <td>{startup.city}</td>
                <td>{startup.fundingStage}</td>
                <td>
                  <a href={startup.website} target="_blank" rel="noopener noreferrer">
                    {startup.website}
                  </a>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(startup.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StartupDashboard;
