import { SHOW, HIDE, RESET } from './action_types';

export const showModal = (modalType, modalProps) => ({
  type: SHOW,
  payload: { modalType, modalProps }
});

export const hideModal = (modalType) => ({
  type: HIDE,
  payload: modalType
});

export const resetModals = () => ({
  type: RESET
});