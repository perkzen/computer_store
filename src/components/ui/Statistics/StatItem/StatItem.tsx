import React, { FC } from 'react';
import { Stat } from '../../../../constants/stats';
import classes from './StatItem.module.scss';
import CountUp from 'react-countup';

interface StatItemProps {
  stat: Stat;
}

const StatItem: FC<StatItemProps> = ({ stat }) => {
  return (
    <div className={classes.Container}>
      <h1 className={classes.Title}>
        {stat.icon}
        {stat.label}
      </h1>
      <div className={classes.Counter}>
        <CountUp end={stat.value} duration={2} start={0} />
      </div>
      <div className={classes.Info}>
        <div className={'badge badge-accent badge-outline my-5'}>
          {stat.info}
        </div>
      </div>
    </div>
  );
};

export default StatItem;
