import React from 'react';
import { shallow } from 'enzyme';
import HistoryItem from './HistoryItem.jsx';

describe('RequestItem', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(
      <HistoryItem method='post' url='https://jsonplaceholder.typicode.com/posts' onClick={() => {}} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
