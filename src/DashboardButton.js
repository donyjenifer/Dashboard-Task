import React from 'react';
import { Link } from 'react-router-dom';

const DashboardButton = () => {
  return (
    <div>
      <Link to="/create-dashboard">Create Dashboard 1</Link>
      <Link to="/create-dashboard">Create Dashboard 2</Link>
      <Link to="/create-dashboard">Create Dashboard 3</Link>
    </div>
  );
};

export default DashboardButton;
