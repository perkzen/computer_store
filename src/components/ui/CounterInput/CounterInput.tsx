import React, { FC, MutableRefObject, useRef } from 'react';
import classes from './CounterInput.module.scss';

interface CounterInputProps {
  count: number;
  setCount: (prevCount: number) => void;
}

const CounterInput: FC<CounterInputProps> = ({ count, setCount }) => {
  const ref = useRef() as MutableRefObject<HTMLInputElement>;

  const handleIncrement = () => {
    ref.current.stepUp(1);
    setCount(parseInt(ref.current.value));
  };

  const handleDecrement = () => {
    ref.current.stepDown(1);
    setCount(parseInt(ref.current.value));
  };

  return (
    <div className={classes.Container}>
      <div className={classes.Input}>
        <button className={classes.Minus} onClick={handleDecrement}>
          -
        </button>
        <input type={'number'} value={count} readOnly min={1} ref={ref} />
        <button className={classes.Plus} onClick={handleIncrement}>
          +
        </button>
      </div>
    </div>
  );
};

export default CounterInput;
