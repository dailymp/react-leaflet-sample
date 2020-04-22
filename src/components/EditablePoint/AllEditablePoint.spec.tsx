import * as React from 'react';
import { shallow } from 'enzyme';
import { AllEditablePoints } from './AllEditablePoint';

describe('Tests for AllEditablePoints component', () => {
  it('should render as expected when passing required properties', () => {
    const props = {
        pins: [
            {x: 1, y:3, hexadecimalColor: '#00e700'},
            {x: 4, y:6, hexadecimalColor: '#00e700'},
        ],
        onEditPins: jest.fn(),
    };

    const component = shallow(<AllEditablePoints
        pins={props.pins}
        onEditPins={props.onEditPins}
    />);

    expect(component).toMatchSnapshot();
  });
});