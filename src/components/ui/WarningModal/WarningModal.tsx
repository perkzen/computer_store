import React, { FC } from 'react';
import classes from './WarningModal.module.scss';
import { Modal } from '../../../store/models/Modal';

interface WarningModalProps {
  modal: Modal;
}

const WarningModal: FC<WarningModalProps> = ({ modal }) => {
  return (
    <div className={classes.Modal}>
      <div className={classes.Content}>
        <div className={classes.Body}>{modal.body}</div>
        <div className={classes.ButtonContainer}>
          <button onClick={modal.secondaryButtonAction}>
            {modal.secondaryButtonText}
          </button>
          <button onClick={modal.primaryButtonAction}>
            {modal.primaryButtonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WarningModal;
