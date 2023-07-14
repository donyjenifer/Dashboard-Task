import React from 'react';
import { Link } from 'react-router-dom';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

const DashboardButton = () => {
  return (

<Sidebar>
  <Menu>
    <SubMenu label="Dashboard">
      <MenuItem>  
      <Link to="/create-dashboard">Dashboard 1</Link></MenuItem>
      <MenuItem> 
       <Link to="/create-dashboard">Dashboard 2</Link></MenuItem>
      <MenuItem> 
       <Link to="/create-dashboard">Dashboard 3</Link></MenuItem>
    </SubMenu>
   </Menu>
</Sidebar>

  );
};

export default DashboardButton;
