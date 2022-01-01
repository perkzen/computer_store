import React, { FC, useState } from 'react';
import classes from './LoginModal.module.scss';
import Input from '../Input/Input';
import { useDispatch } from 'react-redux';
import { removeModal } from '../../../features/globalSlice';
import { useForm } from 'react-hook-form';
import { admin } from '../../../constants/accounts';
import { login } from '../../../features/authSlice';

interface LoginFormData {
  username: string;
  password: string;
}

const defaultValues: LoginFormData = {
  username: '',
  password: '',
};

const LoginModal: FC = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState('');

  const { handleSubmit, register, formState } = useForm<LoginFormData>({
    mode: 'onSubmit',
    defaultValues,
  });

  const { dirtyFields, errors } = formState;

  const isDisabled = (): boolean | undefined => {
    return dirtyFields.username && dirtyFields.password;
  };

  const onSubmit = (data: LoginFormData) => {
    if (data.username === admin.username && data.password === admin.password) {
      dispatch(login(admin));
      dispatch(removeModal());
    } else {
      setError('Invalid login credentials!');
    }
  };

  return (
    <div className={classes.Modal} onClick={(event) => event.stopPropagation()}>
      <div className={classes.Content}>
        <div className={classes.Header}>
          <h3>Login</h3>
        </div>
        <>
          {error && (
            <div className={classes.Body}>
              <div className={classes.Error}>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 mx-2 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                    />
                  </svg>
                  <label>{error}</label>
                </div>
              </div>
            </div>
          )}
        </>
        <div className={classes.Body}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input label={'Username'} register={register} id={'username'} />
            <Input
              label={'Password'}
              register={register}
              id={'password'}
              type={'password'}
              errors={errors}
            />
            <div className={classes.ButtonContainer}>
              <button
                onClick={() => dispatch(removeModal())}
                className={classes.Secondary}
              >
                Close
              </button>
              <button
                type={'submit'}
                disabled={!isDisabled()}
                className={classes.Primary}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
