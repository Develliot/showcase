import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { HeaderNavLink } from '../';

it('renders the component properly with all of its props', () => {
    const wrapper: ShallowWrapper = shallow(
        <HeaderNavLink title={'title'} to={'/page'} exact={true} />
    );
    expect(wrapper).toMatchSnapshot();
});

it('renders the component properly with "exact" undefined', () => {
    const wrapper: ShallowWrapper = shallow(
        <HeaderNavLink title={'title'} to={'/page'} />
    );
    expect(wrapper).toMatchSnapshot();
});
