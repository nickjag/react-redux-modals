import configureStore from 'redux-mock-store';
import { actions } from 'react-redux-modals';

const middlewares = [];
const mockStore = configureStore(middlewares);

const initialState = {};
const store = mockStore(initialState);

describe('actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  describe('modalAgree', () => {
    test('Dispatches the correct action and payload', () => {
      store.dispatch(actions.showModal('MODAL_AGREE'));
      expect(store.getActions()).toMatchSnapshot();
    });
  });

  describe('modalProps', () => {
    test('Dispatches the correct action and payload', () => {
      store.dispatch(actions.showModal('MODAL_PROPS', {
        onSubmit: (data) => data
      }));
      expect(store.getActions()).toMatchSnapshot();
    });
  });
});