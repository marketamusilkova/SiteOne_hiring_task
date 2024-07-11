import React from 'react';
import './ChevronChart.css';

export const ChevronChart = ({ checkboxes }) => {
  return (
    <div className="chevron-chart">
      {checkboxes.map((checked, index) => (
        checked && <div key={index} className={`chevron segment-${index + 1}`}></div>
      ))}
    </div>
  );
};


