import * as React from "react";
import { marginComponentsInEditablePointList, PointWithEnable } from "./EditablePointList";

interface PropsPoint {
    getAndSetPin: [PointWithEnable, React.Dispatch<React.SetStateAction<PointWithEnable>>][],
    pin: PointWithEnable,
    setPin: React.Dispatch<React.SetStateAction<PointWithEnable>>,
    indexPin: number
}

export const EditablePoint = (props: PropsPoint) => (
    <p>
        <label >X: </label>
        <input
            type="text"
            value={props.pin.x}
            style={marginComponentsInEditablePointList()}
            onChange={event => props.setPin({...props.pin, x: +event.target.value})}
        />
        <label style={marginComponentsInEditablePointList()}>Y: </label>
        <input
            type="text"
            value={props.pin.y}
            style={marginComponentsInEditablePointList()}
            onChange={event => props.setPin({...props.pin, y: +event.target.value})}
        />
        <label style={marginComponentsInEditablePointList()}>Color: </label>
        <input
            type="text"
            value={props.pin.hexadecimalColor}
            style={marginComponentsInEditablePointList()}
            onChange={event => props.setPin({...props.pin, hexadecimalColor: event.target.value})}
        />
        <button
            style={marginComponentsInEditablePointList()}
            onClick={event => {
                event.currentTarget.disabled = true; // If there's a problem, at least the button is disabled.
                props.setPin({...props.pin, isEnable: false});
            }}
        >Delete</button>
    </p>
);
