import React from 'react';
import classes from './Select.module.scss';
import classNames from 'classnames';
import { v4 } from 'uuid';
import { UseFormRegister } from 'react-hook-form';

interface SelectProps<T> {
  options?: T[];
  className?: string;
  placeholder?: string;
  id: string;
  value?: string;
  register: UseFormRegister<any>;
}

const Select = <T,>({
  options,
  placeholder,
  className,
  id,
  register,
  value,
}: SelectProps<T>) => {
  return (
    <>
      <select
        className={classNames(classes.Select, className)}
        id={id}
        {...register(id)}
        value={value}
      >
        {placeholder && <option disabled={true}>{placeholder}</option>}
        {options?.map((item) => (
          <option key={v4()} value={item as unknown as string}>
            {item}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
