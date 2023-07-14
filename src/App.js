import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardButton from './DashboardButton';
import CreateDashboard from './CreateDashboard';
import ChartContainer from './ChartContainer';
import './App.css';

const App = () => {

  const selectedCharts = JSON.parse(localStorage.getItem('selectedCharts')) || [];

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<DashboardButton />} />
        <Route path="/create-dashboard" element={<CreateDashboard />} />
        <Route path="/dashboard" element={<ChartContainer selectedCharts={selectedCharts} />} />
      </Routes>
    </Router>
  );
};

export default App;
