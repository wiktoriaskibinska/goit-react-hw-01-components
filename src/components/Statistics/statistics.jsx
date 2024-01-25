import React from 'react';

const Statistics = ({ stats, tittle }) => {
  return (
    <section className="statistics">
      {tittle && <h2 className="title">{tittle}</h2>}

      <ul className="stat-list">
        {stats.map(stat => (
          <li className="item" key={stat.id}>
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
