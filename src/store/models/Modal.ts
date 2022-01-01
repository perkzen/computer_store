import { ReactNode } from 'react';

export enum ModalType {
  LOGIN = 'login',
  SUCCESS = 'success',
  WARNING = 'warning',
}

export interface Modal {
  modalType: ModalType;
  icon?: ReactNode;
  body?: string;
  onBackdropClose?: boolean;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryButtonAction?: () => void;
  secondaryButtonAction?: () => void;
}
