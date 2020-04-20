import * as React from "react";
import { Point } from "../common/Point";

interface Props {
    pins: Point[];
}

const marginPointComponentsCSS = () => ({marginLeft: '1em'});

export const EditablePoints = (props: Props) => {
    // TODO: Creative idea: Use hooks to edit data in inputs and when you are finished push in apply changes to map.
    return (
        <>
            <h1>Edit points</h1>
            <button>Apply Changes</button>
            {
                props.pins.map((pin: Point) => (
                    <p>
                        <label >X: </label>
                        <input type="text" value={pin.x} style={marginPointComponentsCSS()} />
                        <label style={marginPointComponentsCSS()}>Y: </label>
                        <input type="text" value={pin.y} style={marginPointComponentsCSS()} />
                        <label style={marginPointComponentsCSS()}>Color: </label>
                        <input type="text" value={pin.hexadecimalColor} style={marginPointComponentsCSS()} />
                        <button style={marginPointComponentsCSS()}>Delete</button>
                    </p>
                ))
            }
        </>
    );
}