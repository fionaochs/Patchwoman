import React from 'react';
import { shallow } from 'enzyme';
import History from './History.jsx';

describe('RequestHistory', () => {
  it('matches a snapshot', () => {
    const requests = [{
      method: 'post', 
      url: 'https://jsonplaceholder.typicode.com/posts'
    }, {
      method: 'get', 
      url: 'https://jsonplaceholder.typicode.com/posts'
    }, {
      method: 'put', 
      url: 'https://jsonplaceholder.typicode.com/posts'
    }, {
      method: 'put', 
      url: 'https://jsonplaceholder.typicode.com/posts'
    }];

    const wrapper = shallow(
      <History requests={requests} onClick={() => {}}onDelete={() => {}} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
