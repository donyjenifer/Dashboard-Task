import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardButton from './DashboardButton';
import CreateDashboard from './CreateDashboard';
import ChartContainer from './ChartContainer';

const App = () => {

  const selectedCharts = JSON.parse(localStorage.getItem('selectedCharts')) || [];

  return (
    <Router>
      <Routes>
        <Route exact path="/">
          <DashboardButton />
        </Route>
        <Route path="/create-dashboard">
          <CreateDashboard />
        </Route>
        <Route path="/dashboard">
          <ChartContainer selectedCharts={selectedCharts} />
        </Route>
        </Routes>
    </Router>
  );
};

export default App;
