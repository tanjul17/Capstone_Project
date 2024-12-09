import React, { useEffect, useState } from "react";
import axios from "axios";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";

const InvestorDashboard = () => {
  const [startups, setStartups] = useState([]);
  const [selectedStartup, setSelectedStartup] = useState(null);
  const [investmentAmount, setInvestmentAmount] = useState("");
  const [suggestions, setSuggestions] = useState("");
  const [showModal, setShowModal] = useState(false);

  const pieChartData = [
    { name: "Tech", count: 40 },
    { name: "Healthcare", count: 30 },
    { name: "Finance", count: 20 },
    { name: "Education", count: 10 },
  ];

  const barChartData = [
    { name: "Seed", count: 15 },
    { name: "Series A", count: 10 },
    { name: "Series B", count: 5 },
    { name: "Series C", count: 2 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  useEffect(() => {
    const fetchStartups = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/startups`);
        setStartups(response.data);
      } catch (error) {
        console.error("Error fetching startups:", error);
      }
    };

    fetchStartups();
  }, []);

  const handleInvestClick = (startup) => {
    setSelectedStartup(startup);
    setShowModal(true);
  };

  const handleInvestmentSubmit = async () => {
    const investmentData = {
      startupId: selectedStartup.id,
      investmentAmount,
      suggestions,
    };

    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/investments`, investmentData);
      alert("Investment submitted successfully!");
      setShowModal(false);
      setInvestmentAmount("");
      setSuggestions("");
    } catch (error) {
      console.error("Error submitting investment:", error);
      alert("Failed to submit investment.");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Investor Dashboard</h2>
      <div className="row mt-4">
        <div className="col-md-6">
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

        <div className="col-md-6">
          <h5>Funding Stages</h5>
          <BarChart
            width={400}
            height={400}
            data={barChartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#82ca9d" />
          </BarChart>
        </div>
      </div>

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
                  <button className="btn btn-primary" onClick={() => handleInvestClick(startup)}>
                    Invest
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Investment Modal */}
      {showModal && (
        <div className="modal" style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Invest in {selectedStartup?.startupName}</h5>
                <button className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="investmentAmount" className="form-label">
                    Investment Amount ($)
                  </label>
                  <input
                    type="number"
                    id="investmentAmount"
                    className="form-control"
                    value={investmentAmount}
                    onChange={(e) => setInvestmentAmount(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="suggestions" className="form-label">
                    Suggestions
                  </label>
                  <textarea
                    id="suggestions"
                    className="form-control"
                    rows="3"
                    value={suggestions}
                    onChange={(e) => setSuggestions(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setShowModal(false)}>
                  Cancel
                </button>
                <button className="btn btn-success" onClick={handleInvestmentSubmit}>
                  Submit Investment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InvestorDashboard;
