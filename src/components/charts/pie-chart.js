import React from 'react';
 
import { Pie } from '@ant-design/plots';

const DemoPie = () => {
  const data = [
    {
      type: 'Category One',
      value: 27
    },
    {
      type: 'Category Two',
      value: 25
    },
    {
      type: 'Category Three',
      value: 18
    },
    {
      type: 'Category Four',
      value: 15
    },
    {
      type: 'Category Five',
      value: 10
    },
    {
      type: 'Others',
      value: 5
    }
  ];

  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.9,
    label: {
      type: 'inner',
      offset: '-30%',
      content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fontSize: 14,
        textAlign: 'center'
      }
    },
    interactions: [
      {
        type: 'element-active'
      }
    ]
  };
  return (
    <div style={{ padding: '20px', borderColor: 'coral', borderStyle: 'solid' }}>
      <Pie {...config} />{' '}
    </div>
  );
};

export default DemoPie;