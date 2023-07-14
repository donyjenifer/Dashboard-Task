import React from 'react';
import DemoLine from './components/charts/line-chart';
import DemoBar from './components/charts/bar-chart';
import DemoPie from './components/charts/pie-chart';
import DemoSankey from './components/charts/sankey-chart';
import DemoBullet from './components/charts/bullet-chart';

const ChartContainer = ({ selectedCharts }) => {
  const renderChart = (chartType) => {
    switch (chartType) {
      case 'line':
        return <DemoLine data={DemoLine} />;
      case 'pie':
        return <DemoPie data={DemoPie} />;
      case 'bar':
        return <DemoBar data={DemoBar} />;
      case 'bullet':
        return <DemoBullet data={DemoBullet} />;
      case 'sankey':
        return <DemoSankey data={DemoSankey} />;
      default:
        return null;
    }
  };

  return (
    <div className='chart'>
      {selectedCharts.map((chartType) => (
        <div key={chartType}>
          <h2>{chartType}</h2>
          {renderChart(chartType)}
        </div>
      ))}
    </div>
  );
};

export default ChartContainer;
