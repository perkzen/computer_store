import React, { FC } from 'react';
import classes from './Textarea.module.scss';
import { UseFormRegister } from 'react-hook-form';
import classNames from 'classnames';

interface TextareaProps {
  label?: string;
  placeholder?: string;
  resizable?: boolean;
  register: UseFormRegister<any>;
  id: string;
  errors: any;
}

const Textarea: FC<TextareaProps> = ({
  label,
  placeholder,
  register,
  id,
  resizable = false,
  errors,
}) => {
  return (
    <div className={classes.FormControl}>
      <label>
        <span>{label}</span>
      </label>
      <textarea
        placeholder={placeholder}
        id={id}
        {...register(id, { required: 'This filed is required!' })}
        className={classNames({ [classes.Resizable]: !resizable })}
      />
      {errors[id] && <small>{errors[id].message}</small>}
    </div>
  );
};

export default Textarea;
