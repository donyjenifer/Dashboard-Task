import React, { useState } from 'react';
import { Button, Dropdown, Input, Menu } from 'antd';

import DemoLine from './components/charts/line-chart';
import DemoBar from './components/charts/bar-chart';
import DemoPie from './components/charts/pie-chart';
import DemoSankey from './components/charts/sankey-chart';
import DemoBullet from './components/charts/bullet-chart';

const DashboardButton = () => {
  const [selectedChart, setSelectedChart] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [filteredCharts, setFilteredCharts] = useState([
    
    { key: 'line', label: 'Line Chart'  },
    { key: 'pie', label: 'Pie Chart' },
    { key: 'bar', label: 'Bar Chart' },
    { key: 'bullet', label: 'Bullet Chart' },
    { key: 'sankey', label: 'Sankey Chart' },
  ]);

  const handleChartSelect = (chart) => {
    setSelectedChart(chart);
  };

  const handleSearch = (value) => {
    setSearchValue(value);
    const filtered = filteredCharts.filter((chart) =>
      chart.label.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCharts(filtered);
  };

  const renderChart = () => {
    if (selectedChart === 'line') {
      return <div><DemoLine /></div>;
    } else if (selectedChart === 'pie') {
      return <div> <DemoPie /> </div>;
    } else if (selectedChart === 'bar') {
      return <div> <DemoBar /> </div>;
    } else if (selectedChart === 'bullet') {
      return <div> <DemoBullet /> </div>;
    } else if (selectedChart === 'sankey') {
      return <div> <DemoSankey /> </div>;
    }
  };

  const chartMenu = (
    <Menu>
      <Menu.Item>
        <Input.Search
          placeholder="Search charts"
          value={searchValue}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </Menu.Item>
      {filteredCharts.map((chart) => (
        <Menu.Item key={chart.key} onClick={() => handleChartSelect(chart.key)}>
          {chart.icon}
          {chart.label}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div>
      <Dropdown overlay={chartMenu} trigger={['click']}>
        <Button>Create Dashboard</Button>
      </Dropdown>
      <div>{renderChart()}</div>
    </div>
  );
};

export default DashboardButton;
