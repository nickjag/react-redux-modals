import reducer from './reducer';
import ModalRoot from './components/root';
import ModalFactory from './components/factory';
import Wrapper from './components/wrapper';
import * as actions from './actions';
import * as actionTypes from './action_types';

export default Wrapper;
export { reducer, actions, actionTypes, ModalRoot, ModalFactory };
