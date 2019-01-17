import { combineReducers } from 'redux';
import { reducer as modals } from '../src/';

const rootReducer = combineReducers({
  modals,
});

export default rootReducer;
