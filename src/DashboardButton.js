import React from 'react';
import { Button, Dropdown, Menu } from 'antd';
import { LineChartOutlined, BarChartOutlined } from '@ant-design/icons';

const DashboardButton = () => {
  const handleChartSelect = (chartType) => {
  
    console.log(`Selected chart: ${chartType}`);
  };

  const menu = (
    <Menu onClick={({ key }) => handleChartSelect(key)}>
      <Menu.Item key="lineChart" icon={<LineChartOutlined />}>
        Line Chart
      </Menu.Item>
      <Menu.Item key="barChart" icon={<BarChartOutlined />}>
        Bar Chart
      </Menu.Item>
   
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <Button type="primary">Create Dashboard</Button>
    </Dropdown>
  );
};

export default DashboardButton;
