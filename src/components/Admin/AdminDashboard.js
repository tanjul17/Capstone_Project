import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [investors, setInvestors] = useState([]);
  const [startups, setStartups] = useState([]);

  // Fetch data for investors and startups
  useEffect(() => {
    fetchInvestors();
    fetchStartups();
  }, []);

  const fetchInvestors = () => {
    axios.get('/api/investors')
      .then((response) => setInvestors(response.data))
      .catch((error) => console.error('Error fetching investors:', error));
  };

  const fetchStartups = () => {
    axios.get('/api/startups')
      .then((response) => setStartups(response.data))
      .catch((error) => console.error('Error fetching startups:', error));
  };

  // Delete investor
  const deleteInvestor = (id) => {
    axios.delete(`/api/investors/${id}`)
      .then(() => {
        setInvestors((prev) => prev.filter((investor) => investor.id !== id));
        alert('Investor removed successfully!');
      })
      .catch((error) => console.error('Error deleting investor:', error));
  };

  // Delete startup
  const deleteStartup = (id) => {
    axios.delete(`/api/startups/${id}`)
      .then(() => {
        setStartups((prev) => prev.filter((startup) => startup.id !== id));
        alert('Startup removed successfully!');
      })
      .catch((error) => console.error('Error deleting startup:', error));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Admin Dashboard</h1>
      
      {/* Investors Section */}
      <section>
        <h2>Registered Investors</h2>
        {investors.length > 0 ? (
          <ul>
            {investors.map((investor) => (
              <li key={investor.id}>
                {investor.name} - {investor.email}
                <button 
                  onClick={() => deleteInvestor(investor.id)} 
                  style={{ marginLeft: '10px', color: 'red' }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No investors registered.</p>
        )}
      </section>

      {/* Startups Section */}
      <section>
        <h2>Registered Startups</h2>
        {startups.length > 0 ? (
          <ul>
            {startups.map((startup) => (
              <li key={startup.id}>
                {startup.name} - {startup.email}
                <button 
                  onClick={() => deleteStartup(startup.id)} 
                  style={{ marginLeft: '10px', color: 'red' }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No startups registered.</p>
        )}
      </section>
    </div>
  );
};

export default AdminDashboard;
