import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [dashboards, setDashboards] = useState([]);
  const [currentDashboard, setCurrentDashboard] = useState(null);
  const [newDashboardName, setNewDashboardName] = useState('');


  useEffect(() => {
    const savedDashboards = localStorage.getItem('dashboards');
    if (savedDashboards) {
      setDashboards(JSON.parse(savedDashboards));
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem('dashboards', JSON.stringify(dashboards));
  }, [dashboards]);

  const handleCreateDashboard = () => {
    const newDashboard = {
      id: Date.now(), 
      name: newDashboardName,
      charts: [] 
    };

    setDashboards(prevDashboards => [...prevDashboards, newDashboard]);
    setCurrentDashboard(newDashboard);
    setNewDashboardName('');
  };

  const handleSwitchDashboard = (dashboard) => {
    setCurrentDashboard(dashboard);
  };

  return (
    <div>
      <h1>Dashboard</h1>

    
      <input
        type="text"
        placeholder="Enter dashboard name"
        value={newDashboardName}
        onChange={e => setNewDashboardName(e.target.value)}
      />
      <button onClick={handleCreateDashboard}>Create Dashboard</button>

    
      <h2>Existing Dashboards:</h2>
      {dashboards.map(dashboard => (
        <div key={dashboard.id}>
          <button onClick={() => handleSwitchDashboard(dashboard)}>
            {dashboard.name}
          </button>
        </div>
      ))}


      {currentDashboard && (
        <div>
          <h2>Current Dashboard: {currentDashboard.name}</h2>
        
        </div>
      )}
    </div>
  );
};

export default Dashboard;
