import React from 'react';
import { Provider } from 'react-redux';
import { ShallowMock } from '../helpers/shallow_mock';
import ConnectedApp, { App } from '../../src/components/app';
import Button from '../../src/components/button';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';

const middlewares = [];
const mockStore = configureStore(middlewares);

describe('app component', () => {
  test('renders the component', () => {

    const initialState = {};
    const store = mockStore(initialState);
    const wrapper = shallow(ShallowMock(<App />, store));

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('fires first modal action', () => {

    const initialState = {};
    const store = mockStore(initialState);
    const wrapper = mount(<Provider store={store}>
      <ConnectedApp />
    </Provider>);

    wrapper.find(Button).first().simulate('click');
    expect(store.getActions()).toMatchSnapshot();
  });

});