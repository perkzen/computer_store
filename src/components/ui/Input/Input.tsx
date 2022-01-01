import React, { FC, HTMLProps } from 'react';
import classes from './Input.module.scss';
import { UseFormRegister } from 'react-hook-form';

interface InputProps extends HTMLProps<HTMLInputElement> {
  label?: string;
  type?: InputType;
  register: UseFormRegister<any>;
  id: string;
  className?: string;
  errors?: any;
  step?: string;
}

type InputType = 'text' | 'number' | 'password';

const Input: FC<InputProps> = ({
  placeholder,
  id,
  label,
  register,
  type = 'text',
  className,
  errors,
  step,
}) => {
  const showError = () => {
    if (errors && errors.hasOwnProperty(id)) {
      return <small>{errors[id].message}</small>;
    }
  };

  return (
    <div className={classes.FormControl}>
      <label>
        <span>{label}</span>
      </label>
      <input
        id={id}
        {...register(id, { required: 'This filed is required!' })}
        type={type}
        placeholder={placeholder}
        className={className}
        step={step}
      />
      {showError()}
    </div>
  );
};

export default Input;
