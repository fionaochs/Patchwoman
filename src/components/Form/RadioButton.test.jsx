  
import React from 'react';
import { shallow } from 'enzyme';
import { RadioButton } from './RadioButton.jsx';

describe('RadioButton', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(
      <RadioButton
        id="get"
        onChange={() => {}}
        name="method"
        method="get"
        value="get" />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
