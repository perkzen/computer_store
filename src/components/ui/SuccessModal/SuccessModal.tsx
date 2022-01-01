import React, { FC } from 'react';
import classes from './SuccessModal.module.scss';
import { Modal } from '../../../store/models/Modal';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { useAppDispatch } from '../../../app/hooks';
import { removeModal } from '../../../features/globalSlice';

interface SuccessModalProps {
  modal: Modal;
}

const SuccessModal: FC<SuccessModalProps> = ({ modal }) => {
  const dispatch = useAppDispatch();
  return (
    <div className={classes.Modal}>
      <div className={classes.Content}>
        <div className={classes.Exit}>
          <IoCloseCircleOutline onClick={() => dispatch(removeModal())} />
        </div>

        <div className={classes.Body}>
          {modal.icon} {modal.body}
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
