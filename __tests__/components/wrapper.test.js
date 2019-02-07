import React from 'react';
import { shallow } from 'enzyme';
import Modal from '../../src';

describe('modal wrapper', () => {
  test('renders the component with props', () => {
    const config = { level: 1, zIndex: 5 };
    const component = shallow(<Modal config={config} />);

    expect(component.children('.modal-overlay').prop('zIndex')).toBe(6);
    expect(component.children('.modal-wrapper').prop('zIndex')).toBe(7);
  });
});
