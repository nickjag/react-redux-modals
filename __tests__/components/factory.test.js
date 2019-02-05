import React from 'react';
import { Provider } from 'react-redux';
import { ModalFactory } from '../../src';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';

const middlewares = [];
const mockStore = configureStore(middlewares);

describe('modal factory', () => {
  test('initially renders without children', () => {

    const initialState = { modals: {} };
    const store = mockStore(initialState);
    const wrapper = mount(<Provider store={store}><ModalFactory /></Provider>);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('renders with children after action', () => {

    const initialState = {
      modals: { 
        activeModals: [
          { modalType: 'MODAL_TEST', modalProps: null, level: 3 } 
        ],
        currentLevel: 3
      }
    };
    const store = mockStore(initialState);
    const modalTypes = { 'MODAL_TEST': (props) => <div>Modal Test!</div> };
    const wrapper = mount(<Provider store={store}><ModalFactory modalTypes={modalTypes} /></Provider>);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('fires prop on children', () => {

    const mockOnClick = jest.fn();
    const initialState = {
      modals: {
        activeModals: [
          { modalType: 'MODAL_TEST', modalProps: {
            onSubmit: mockOnClick
          }, level: 3 } 
        ],
        currentLevel: 3
      }
    };
    const store = mockStore(initialState);
    const modalTypes = {'MODAL_TEST': (props) => <div><button onClick={props.onSubmit} /></div>};
    const wrapper = mount(<Provider store={store}><ModalFactory modalTypes={modalTypes} /></Provider>);

    wrapper.find('button').simulate('click');

    expect(mockOnClick.mock.calls.length).toEqual(1);
  });

});
