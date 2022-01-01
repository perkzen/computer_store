import React, {FC, MutableRefObject, useRef} from 'react';
import classes from './CounterInput.module.scss';

interface CounterInputProps {
    count: number;
    setCount: (prevCount: number) => void;
    disablePlus?: boolean
    disableMinus?: boolean
}

const CounterInput: FC<CounterInputProps> = ({count, setCount, disablePlus = false, disableMinus = false}) => {
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
                <button className={classes.Minus} onClick={handleDecrement} disabled={disableMinus}>
                    -
                </button>
                <input type={'number'} value={count} readOnly min={1} ref={ref}/>
                <button className={classes.Plus} onClick={handleIncrement} disabled={disablePlus}>
                    +
                </button>
            </div>
        </div>
    );
};

export default CounterInput;
