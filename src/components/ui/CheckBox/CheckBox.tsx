import React, { FC, HTMLProps } from 'react';
import { UseFormRegister } from 'react-hook-form';

interface CheckBoxProps extends HTMLProps<HTMLInputElement> {
  label: string;
  register: UseFormRegister<any>;
  id: string;
}

const CheckBox: FC<CheckBoxProps> = ({ label, register, id }) => {
  return (
    <>
      <input type={'checkbox'} className={'checkbox'} {...register(id)} />
      {label}
    </>
  );
};

export default CheckBox;
