import { SHOW, HIDE, RESET } from './action_types';

const initialState = {
  activeModals: [],
  currentLevel: 1
};

export default (state = initialState, action) => {
  switch (action.type) {
    
    case SHOW:
      return {
        ...state,
        activeModals: [
          ...state.activeModals.filter(modal => modal.type !== action.payload.type),
          {
            ...action.payload,
            level: state.currentLevel + 2
          }
        ],
        currentLevel: state.currentLevel + 2
      };

    case HIDE:
      return {
        ...state,
        activeModals: state.activeModals.filter(modal => modal.type !== action.payload),
        currentLevel: (state.activeModals.filter(modal => modal.type !== action.payload).length > 0 
          ? state.currentLevel : 1)
      }

    case RESET:
      return initialState;

    default:
      return state;
  }
}