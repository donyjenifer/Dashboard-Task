import React from 'react';

import { Bullet } from '@ant-design/plots';

const DemoBullet = () => {
  const data = [
    {
      title: 'Satisfaction',
      ranges: [100],
      measures: [80],
      target: 85
    }
  ];

  const config = {
    data,
    measureField: 'measures',
    rangeField: 'ranges',
    targetField: 'target',
    xField: 'title',
    color: {
      range: '#f0efff',
      measure: '#5B8FF9',
      target: '#3D76DD'
    },
    xAxis: {
      line: null
    },
    yAxis: false,
    layout: 'vertical',
    label: {
      measure: {
        position: 'middle',
        style: {
          fill: '#fff'
        }
      }
    },
    // 自定义 legend
    legend: {
      custom: true,
      position: 'bottom',
      items: [
        {
          // value: '实际值',
          // name: '实际值',
          marker: {
            symbol: 'square',
            style: {
              fill: '#5B8FF9',
              r: 5
            }
          }
        },
        {
          // value: '目标值',
          // name: '目标值',
          marker: {
            symbol: 'line',
            style: {
              stroke: '#3D76DD',
              r: 5
            }
          }
        }
      ]
    }
  };
  return (
    <div style={{ padding: '20px', borderColor: 'coral', borderStyle: 'solid' }}>
      <Bullet {...config} />{' '}
    </div>
  );
};

export default DemoBullet;