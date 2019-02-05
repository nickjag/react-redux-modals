import configureStore from 'redux-mock-store';
import { actions } from '../src';

const middlewares = [];
const mockStore = configureStore(middlewares);

const initialState = {};
const store = mockStore(initialState);

describe('actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  describe('show modal', () => {
    test('Dispatches the correct action and payload', () => {
      store.dispatch(actions.showModal('MODAL_TEST', {
        onSubmit: (data) => data
      }));
      expect(store.getActions()).toMatchSnapshot();
    });
  });

  describe('hide modal', () => {
    test('Dispatches the correct action and payload', () => {
      store.dispatch(actions.hideModal('MODAL_TEST'));
      expect(store.getActions()).toMatchSnapshot();
    });
  });

  describe('reset modals', () => {
    test('Dispatches the correct action and payload', () => {
      store.dispatch(actions.resetModals());
      expect(store.getActions()).toMatchSnapshot();
    });
  });

});