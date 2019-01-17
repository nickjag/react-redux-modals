import { SHOW, HIDE, RESET } from './action_types';

// export const showModal = (type, props) => ({
//   type: SHOW,
//   payload: { type, props }
// });

export const showModal = (type, props) => {
console.log('testing1', type);
  return (
    {
      type: SHOW,
      payload: { type, props }
    }
  );
  }

export const hideModal = (type) => ({
  type: HIDE,
  payload: type
});