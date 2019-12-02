import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Carousel } from '../';

it('renders correctly', () => {
    const wrapper: ShallowWrapper = shallow(
        <Carousel>
            {['a', 'b', 'c'].map((item, index) => {
                return <div key={index}>{item}</div>;
            })}
        </Carousel>
    );
    expect(wrapper).toMatchSnapshot();
});
