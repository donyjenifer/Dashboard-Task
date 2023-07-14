import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Select, Button } from 'antd';

const { Option } = Select;

const CreateDashboard = () => {
    const navigate = useNavigate();;
  const [selectedCharts, setSelectedCharts] = useState([]);

  const handleChartSelection = (value) => {
    setSelectedCharts(value);
  };

  const handleCreateDashboard = () => {
    
    localStorage.setItem('selectedCharts', JSON.stringify(selectedCharts));
    navigate('/dashboard');
  };

  return (
    <div className='sample'>
      <h1>Create Dashboard</h1>
      <Select
        mode="multiple"
        style={{ width: 200 }}
        placeholder="Select charts"
        onChange={handleChartSelection}
      >
        <Option value="line">Line Chart</Option>
        <Option value="pie">Pie Chart</Option>
        <Option value="bar">Bar Chart</Option>
        <Option value="bullet">Bullet Chart</Option>
        <Option value="sankey">Sankey Chart</Option>
      </Select>
      <Button type="primary" onClick={handleCreateDashboard}>
        Create Dashboard
      </Button>
    </div>
  );
};

export default CreateDashboard;
