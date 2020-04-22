import * as React from 'react';
import { shallow } from 'enzyme';
import { EditablePointList } from './EditablePointList';

describe('Tests for EditablePointList component', () => {
  it('should render as expected when passing required properties', () => {
    const props = {
        pins: [
            {x: 1, y:3, hexadecimalColor: '#00e700'},
            {x: 4, y:6, hexadecimalColor: '#00e700'},
        ],
        onEditPins: jest.fn(),
        setShowPointList: jest.fn()
    };

    const component = shallow(<EditablePointList
        pins={props.pins}
        onEditPins={props.onEditPins}
        setShowPointList={props.setShowPointList}
    />);

    expect(component).toMatchSnapshot();
  });
});