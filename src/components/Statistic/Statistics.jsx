import React from 'react'
import './Statistics.css';


const Statistics = ({stats}) => {
  return (
    <section className="statistics">

  <ul className="stat-list">
    {stats.map(stat => (
        <li key = {stat.id} className="item">
        <span className="label">{stat.label}</span>
        <span className="percentage">{stat.percentage}%</span>
      </li>
    ))}
  </ul>
</section>
  );
};

export {Statistics};