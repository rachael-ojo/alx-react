// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import MyComponent from './MyComponent';

describe('MyComponent', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<MyComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
