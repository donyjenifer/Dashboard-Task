import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout, Menu } from 'antd';
// import 'antd/dist/antd.css';
import './App.css';
import DemoLine from './components/charts/line-chart';
import DemoBar from './components/charts/bar-chart';
import DemoPie from './components/charts/pie-chart';
import DemoSankey from './components/charts/sankey-chart';
import DemoBullet from './components/charts/bullet-chart';

const { SubMenu } = Menu;
const { Sider, Content } = Layout;

const DashboardButton = ({ handleChartSelection }) => {
  return (
    <Sider theme="light">
      <Menu mode="horizontal">
      <Menu mode='inline'>
      <div className='menu' >
        <SubMenu key="sub1" title="Create Dashboard">
  
          <Menu.Item key="1" onClick={() => handleChartSelection('Line Chart')}>
           Line Chart
          </Menu.Item>
          <Menu.Item key="2" onClick={() => handleChartSelection('Pie Chart')}>
            Pie Chart
          </Menu.Item>
          <Menu.Item key="3" onClick={() => handleChartSelection('Bar Chart')}>
           Bar Chart
          </Menu.Item>
          <Menu.Item key="3" onClick={() => handleChartSelection('Sankey Chart')}>
           Sankey Chart
          </Menu.Item>
          <Menu.Item key="3" onClick={() => handleChartSelection('Bullet Chart')}>
           Bullet Chart
          </Menu.Item>
         
        </SubMenu>
        </div>
      </Menu>
      </Menu>
    </Sider>
  );
};

const ChartContainer = ({ selectedChart }) => {
  const renderChart = () => {
    switch (selectedChart) {
      case 'Line Chart':
        return <DemoLine />;
      case 'Pie Chart':
        return <DemoPie />;
      case 'Bar Chart':
        return <DemoBar />;
        case 'Sankey Chart':
        return <DemoSankey />;
        case 'Bullet Chart':
        return <DemoBullet />;
      default:
        return null;
    }
  };

  return (
    <Content className="chart-container">
      <div className="chart">
        {selectedChart && (
          <div>
            <h2>{selectedChart}</h2>
            {renderChart()}
          </div>
        )}
      </div>
    </Content>
  );
};

const App = () => {
  const [selectedChart, setSelectedChart] = useState('');

  const handleChartSelection = (chart) => {
    setSelectedChart(chart);
  };

  return (
    <div className="app-container">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <DashboardButton handleChartSelection={handleChartSelection} />
                <ChartContainer selectedChart={selectedChart} />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
