import { SHOW, HIDE, RESET } from './action_types';

export const showModal = (type, props) => ({
  type: SHOW,
  payload: { type, props }
});

export const hideModal = (type) => ({
  type: HIDE,
  payload: type
});

export const resetModals = (type) => ({
  type: RESET
});