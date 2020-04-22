import * as React from "react";
import { Point } from "../../common/Point";
import { EditablePoint } from "./EditablePoint";

interface PropsEditablePointList {
    pins: Point[];
    onEditPins: (newPins: Point[]) => void;
    setShowPointList: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface PointWithEnable extends Point {
    isEnable: boolean;
}

export const marginComponentsInEditablePointList = () => ({marginLeft: '1em'});

const parseGetAndSetPinListToPins = (getAndSetPin: [PointWithEnable, React.Dispatch<React.SetStateAction<PointWithEnable>>][]): Point[] => (
    getAndSetPin.map(([pin, _]) => ({
        x: pin.x,
        y: pin.y,
        hexadecimalColor: pin.hexadecimalColor,
    }))
);

export const EditablePointList = (props: PropsEditablePointList) => {
    const getAndSetPin = props.pins.map((pin: Point) => {
        return React.useState({...pin, isEnable: true});
    });
    let indexPin = 0;

    return (
        <>
            <p>
                <button
                    onClick={evt => {
                        props.onEditPins(parseGetAndSetPinListToPins(getAndSetPin));
                        props.setShowPointList(false);
                    }}
                >Apply Changes</button>
                <button
                    style={marginComponentsInEditablePointList()}
                    onClick={evt => props.setShowPointList(false)}
                >Cancel Changes</button>
            </p>
            {
                getAndSetPin.map(([pin, setPin]) => {
                    const result = pin.isEnable ?
                        <EditablePoint
                            key={`editable-point-${indexPin}`}
                            pin={pin}
                            setPin={setPin} />
                        : undefined;
                    indexPin++;
                    return result;
                })
            }
        </>
    );
}

