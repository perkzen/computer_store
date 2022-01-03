import React, { FC, ReactNode } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { ModalType } from '../../../store/models/Modal';
import LoginModal from '../LoginModal/LoginModal';
import classes from './ModalProvider.module.scss';
import SuccessModal from '../SuccessModal/SuccessModal';
import { createPortal } from 'react-dom';
import classNames from 'classnames';
import { removeModal } from '../../../features/globalSlice';
import WarningModal from '../WarningModal/WarningModal';

interface ModalProviderProps {
  children: ReactNode;
}

const ModalProvider: FC<ModalProviderProps> = ({ children }) => {
  const modal = useAppSelector((state) => state.global.modal);
  const open = !!modal;
  const dispatch = useAppDispatch();

  const showModalType = () => {
    switch (modal?.modalType) {
      case ModalType.LOGIN:
        return <LoginModal />;
      case ModalType.SUCCESS:
        return <SuccessModal modal={modal} />;
      case ModalType.WARNING:
        return <WarningModal modal={modal} />;
      default:
        return null;
    }
  };

  return (
    <>
      {children}
      {open &&
      createPortal(
        <div
          className={classNames({
            [classes.Backdrop]: true,
            [classes.BackdropAnimateIn]: open,
          })}
          onClick={
            modal?.onBackdropClose ?? true
              ? () => dispatch(removeModal())
              : undefined
          }
        >
          <div className={classes.Container}>{showModalType()}</div>
        </div>,
        document.getElementById('modal')!,
      )}
    </>
  );
};
export default ModalProvider;
