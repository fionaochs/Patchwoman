import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form.jsx';

describe('Form', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(
      <Form
        onSubmit={() => {}}
        onChange={() => {}}
        url="http://musicbrainz.org/ws/2/artist?query=nahko&fmt=json&limit=25"
        method="get"
        buttonText="Send" />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
