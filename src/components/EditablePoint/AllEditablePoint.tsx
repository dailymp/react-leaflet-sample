import * as React from "react";
import { Point } from "../../common/Point";
import { EditablePointList } from "./EditablePointList";

interface Props {
    pins: Point[];
    onEditPins: (newPins: Point[]) => void;
}

export const AllEditablePoints = (props: Props) => {
    const [showPointList, setShowPointList] = React.useState(false);

    return(
        <>
        <h1>Edit points</h1>
        {
            showPointList ?
                <>
                    <EditablePointList {...props} setShowPointList={setShowPointList} />
                </>
                : <button onClick={evt => setShowPointList(true)}>Edit Point List</button>
        }
        </>
    );
}
