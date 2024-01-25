import React from 'react';
import css from './statistisc.module.css';

const Statistics = ({ stats, tittle }) => {
  return (
    <div className={css.wrapper}>
      <section className={css.statistics}>
        {tittle && <h2 className={css.tittle}>{tittle}</h2>}

        <ul className={css.statList}>
          {stats.map(stat => (
            <li className={css.item} key={stat.id}>
              <span className={css.label}>{stat.label}</span>
              <span className={css.percentage}>{stat.percentage}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Statistics;
