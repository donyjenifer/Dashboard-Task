import React from 'react';

import { Sankey } from '@ant-design/plots';

const DemoSankey = () => {
  const DATA = [
    {
      source: 'First Open',
      target: 'Homepage UV',
      value: 160
    },
    {
      source: 'Results Page',
      target: 'Homepage UV',
      value: 40
    },
    {
      source: 'Verification Page',
      target: 'Homepage UV',
      value: 10
    },
    {
      source: 'My Page',
      target: 'Homepage UV',
      value: 10
    },
    {
      source: 'Friends',
      target: 'Homepage UV',
      value: 8
    },
    {
      source: 'Other Sources',
      target: 'Homepage UV',
      value: 27
    },
    {
      source: 'Homepage UV',
      target: 'Investment',
      value: 30
    },
    {
      source: 'Homepage UV',
      target: 'Scan',
      value: 40
    },
    {
      source: 'Homepage UV',
      target: 'Services',
      value: 35
    },
    {
      source: 'Homepage UV',
      target: 'Ant Forest',
      value: 25
    },
    {
      source: 'Homepage UV',
      target: 'Bounce',
      value: 10
    },
    {
      source: 'Homepage UV',
      target: 'Jiebei',
      value: 30
    },
    {
      source: 'Homepage UV',
      target: 'Huabei',
      value: 40
    },
    {
      source: 'Homepage UV',
      target: 'Other Flows',
      value: 45
    }
  ];
  const config = {
    data: DATA,
    sourceField: 'source',
    targetField: 'target',
    weightField: 'value',
    nodeWidthRatio: 0.008,
    nodePaddingRatio: 0.03
  };
  return (
    <div style={{ padding: '20px', borderColor: 'coral', borderStyle: 'solid' }}>
      <Sankey {...config} />
    </div>
  );
};

export default DemoSankey;