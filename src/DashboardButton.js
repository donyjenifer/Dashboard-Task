import React from 'react';
import { Link } from 'react-router-dom';

const DashboardButton = () => {
  return (
    <div className='dashboard'>
   
      <ul><Link to="/create-dashboard">Dashboard 1</Link></ul>
      <ul><Link to="/create-dashboard"> Dashboard 2</Link></ul>
      <ul><Link to="/create-dashboard"> Dashboard 3</Link></ul>
   
    </div>
  );
};

export default DashboardButton;
