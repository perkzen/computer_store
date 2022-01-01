import React, { FC, useEffect, useState } from 'react';
import Components from '../../../assets/pexels-martin-lopez-2225616.jpg';
import Nvidia from '../../../assets/pexels-nana-dua-4581902.jpg';
import PC from '../../../assets/pexels-sharad-kachhi-7199194.jpg';
import classes from './Carousel.module.scss';

interface Slide {
  img: string;
  title: string;
  body: string;
}

const images: Slide[] = [
  {
    img: PC,
    title: 'Best Gaming Equipment',
    body: 'Guaranteed to improve your gaming performance.',
  },
  {
    img: Nvidia,
    title: 'Nvidia GTX 1080 Ti',
    body: 'The best graphics card on the market.',
  },
  {
    img: Components,
    title: 'Gaming PC Components',
    body: 'For high performance while playing your favourite video game.',
  },
];

const Carousel: FC = () => {
  const [selected, setSelected] = useState(0);

  const changeNext = () => {
    setSelected(selected + 1 < images.length ? selected + 1 : 0);
  };
  const changePrev = () => {
    setSelected(selected - 1 >= 0 ? selected - 1 : images.length - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      changeNext();
    }, 5000);
    return () => clearInterval(interval);
  });

  return (
    <div className={classes.Container}>
      <div className={classes.CarouselItem}>
        <div className={classes.CarouselText}>
          <h1>{images[selected].title}</h1>
          <p>{images[selected].body}</p>
        </div>
        <img src={images[selected].img} alt={images[selected].title} />
        <div className={classes.ButtonContainer}>
          <button onClick={changePrev}>❮</button>
          <button onClick={changeNext}>❯</button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
