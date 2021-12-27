import React from 'react';
import Footer from './Footer';
import { create } from 'react-test-renderer'

it('footer renders correctly', () => {
  const tree = create(<Footer />).toJSON();
  expect(tree).toMatchSnapshot();
});
