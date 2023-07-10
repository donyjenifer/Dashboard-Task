import React from 'react';
import Dashboard from './Dashboard';


import DemoLine from './components/charts/line-chart';
import DemoBar from './components/charts/bar-chart';
import DemoPie from './components/charts/pie-chart';
import DemoSankey from './components/charts/sankey-chart';
import DemoBullet from './components/charts/bullet-chart';


const App = () => {
  return (
    <div>
     

     <DemoLine />
      <DemoBar />
      <DemoPie />
      <DemoSankey />
      <DemoBullet />


      <Dashboard />
    </div>
  );
};

export default App;
