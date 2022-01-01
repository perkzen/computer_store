import React from 'react';
import classes from './About.module.scss';
import Statistics from '../../ui/Statistics/Statistics';

const About = () => {
  return (
    <>
      <div className={classes.Container}>
        <h1>
          For two decades,{' '}
          <span className={classes.Highlight}>Computers.com</span> has been at
          the forefront of e-commerce.
        </h1>
        <div className={classes.Content}>
          <p className={classes.Text}>
            Founded in 2001, Computers.com began selling PC components and
            helped popularize the PC-building movement, and in doing so,
            developed a cult following among PC and DIY enthusiasts. Since then,
            Computers.com Inc. is the leading tech-focused e-retailer in North
            America, with a global reach in Europe, South America, Asia Pacific
            and the Middle East. Today, millions of customers turn to
            Computers.com to shop for the latest PC components, consumer
            electronics, smart home and gaming products. Computers.com is
            consistently ranked as one of the best online shopping destinations,
            and the company regularly earns industry-leading customer service
            ratings. Computers.com is headquartered in City of Industry,
            California, with North American distribution facilities located
            throughout the United States and Canada.
          </p>
          <h1>Statistics</h1>
          <Statistics />
          <h1>Partners</h1>
          <div className={classes.PartnersContainer}>
            <img
              src={
                'https://pbs.twimg.com/profile_images/1047166636027871232/nwE4ockb_400x400.jpg'
              }
              alt={'corsair'}
            />
            <img
              src={
                'data:image/png;base64,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'
              }
              alt={'g.skill'}
            />
            <img
              src={
                'data:image/png;base64,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'
              }
              alt={'predator'}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
