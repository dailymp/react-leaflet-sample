import * as React from 'react';
import { shallow } from 'enzyme';
import { EditablePoint } from './EditablePoint';

describe('Tests for EditablePoint component', () => {
  it('should render as expected when passing required properties', () => {
    const props = {
        pin: {x: 1, y:3, hexadecimalColor: '#00e700', isEnable: true},
        setPin: jest.fn()
    };

    const component = shallow(<EditablePoint pin={props.pin} setPin={props.setPin} />);

    expect(component).toMatchSnapshot();
  });
});