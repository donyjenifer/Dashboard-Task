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













// import React, { useState } from 'react';
 
// import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
// import { Select, Button } from 'antd';
// import { useNavigate } from 'react-router-dom';
// import DemoLine from './components/charts/line-chart';
// import DemoBar from './components/charts/bar-chart';
// import DemoPie from './components/charts/pie-chart';
// import DemoSankey from './components/charts/sankey-chart';
// import DemoBullet from './components/charts/bullet-chart';


// const DashboardButton = () => {
//   const navigate = useNavigate();
//   const { Option } = Select;

//     const [selectedCharts, setSelectedCharts] = useState([]);
  
//     const handleChartSelection = (value) => {
//       setSelectedCharts(value);
//     };
  
//     const handleCreateDashboard = () => {
      
//       localStorage.setItem('selectedCharts', JSON.stringify(selectedCharts));
//       navigate ('/dashboard');
//     };


//      ChartContainer = ({ selectedCharts }) => {
//       const renderChart = (chartType) => {
//         switch (chartType) {
//           case 'line':
//             return <DemoLine data={DemoLine} />;
//           case 'pie':
//             return <DemoPie data={DemoPie} />;
//           case 'bar':
//             return <DemoBar data={DemoBar} />;
//           case 'bullet':
//             return <DemoBullet data={DemoBullet} />;
//           case 'sankey':
//             return <DemoSankey data={DemoSankey} />;
//           default:
//             return null;
//         }
//       };
      
       
//      <div>

    

//       <div className='chart'>
//       {selectedCharts.map((chartType) => (
//         <div key={chartType}>
//           {renderChart(chartType)}
         
//         </div>
  
        
//       ))}
    
//       </div>
   
//    <div>
//     <div className='sample'>
//     <h1>Create Dashboard</h1>
//     <Select
//       mode="multiple"
//       style={{ width: 200 }}
//       placeholder="Select charts"
//       onChange={handleChartSelection}>

//       <Option value="line">Line Chart</Option>
//       <Option value="pie">Pie Chart</Option>
//       <Option value="bar">Bar Chart</Option>
//       <Option value="bullet">Bullet Chart</Option>
//       <Option value="sankey">Sankey Chart</Option>
//     </Select>
//     <Button type="primary" onClick={handleCreateDashboard}>
//       Create Dashboard
//     </Button>

//   </div> 
//   </div> 
//   </div>  

//   return (
// <Sidebar>
//   <Menu>
//     <SubMenu label="Dashboard">
//       <MenuItem>  
//       Dashboard 1
//       </MenuItem>
//       <MenuItem> 
//        Dashboard 2
//        </MenuItem>
//       <MenuItem> 
//       Dashboard 3
//       </MenuItem>
//     </SubMenu>
//    </Menu>  
// </Sidebar>

    
//   );
// };
// }
// export default DashboardButton;
