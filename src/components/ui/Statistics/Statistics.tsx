import React, { FC } from 'react';
import { stats } from '../../../constants/stats';
import StatItem from './StatItem/StatItem';
import classes from './Statistics.module.scss';
import { v4 } from 'uuid';

const Statistics: FC = () => {
  return (
    <div className={classes.Container}>
      {stats.map((stat) => (
        <StatItem key={v4()} stat={stat} />
      ))}
    </div>
  );
};

export default Statistics;
