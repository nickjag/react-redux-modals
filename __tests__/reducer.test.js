import { reducer, actionTypes } from '../src';

describe('initial state', () => {
  test('is correct', () => {

    const action = { type: 'dummy_action' };
    const initialState = { activeModals: [], currentLevel: 1 };

    expect(reducer(undefined, action)).toEqual(initialState);
  });
});

describe('modal show action', () => {
  test('returns the correct state', () => {
    
    const action = { type: actionTypes.SHOW, payload: { modalType: 'MODAL_TEST', modalProps: null } };
    const expectedState = { activeModals: [ 
      { modalType: 'MODAL_TEST', modalProps: null, level: 3 } 
    ], currentLevel: 3 };

    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  test('increments and returns the correct state', () => {

    const action = { type: actionTypes.SHOW, payload: { modalType: 'MODAL_TEST', modalProps: null } };
    const nextState = reducer(undefined, action);
    const action2 = { type: actionTypes.SHOW, payload: { modalType: 'MODAL_TEST_2', modalProps: null } };
    const finalState = reducer(nextState, action2);
    
    const expectedState = { activeModals: [
      { modalType: 'MODAL_TEST', modalProps: null, level: 3 },
      { modalType: 'MODAL_TEST_2', modalProps: null, level: 5 },
    ], currentLevel: 5 };

    expect(finalState).toEqual(expectedState);
  });
});

describe('show_hide_modal', () => {
  test('returns the correct state', () => {

    const action_show = { type: actionTypes.SHOW, payload: { modalType: 'MODAL_TEST', modalProps: null } };
    const nextState = reducer(undefined, action_show);
    const action_hide = { type: actionTypes.HIDE, payload: 'MODAL_TEST' };
    const finalState = reducer(nextState, action_hide);
    const initialState = { activeModals: [], currentLevel: 1 };

    expect(finalState).toEqual(initialState);
  });
});