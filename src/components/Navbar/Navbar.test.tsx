import React from 'react';
import { create } from 'react-test-renderer'
import Navbar from './Navbar';

it('Navbar renders correctly', () => {
    const tree = create(<Navbar />).toJSON();
    expect(tree).toMatchSnapshot();
});
