import React from 'react';
import { ModalRoot } from '../../src';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import { render, cleanup } from 'react-testing-library';

const middlewares = [];
const mockStore = configureStore(middlewares);

describe('modal root', () => {

  beforeEach(cleanup);

  test('initially renders', () => {
    
    const initialState = { modals: {} };
    const store = mockStore(initialState);
    const ModalRootWithStore = ModalRoot(store);
    const spy = jest.spyOn(ModalRootWithStore.prototype, '_render');
    const wrapper = mount(<ModalRootWithStore />);
    const { getByTestId } = render(<ModalRootWithStore />);

    expect(spy).toHaveBeenCalled();
    expect(toJson(wrapper)).toMatchSnapshot();
    expect(getByTestId('modal-root')).toMatchSnapshot();
  });
});