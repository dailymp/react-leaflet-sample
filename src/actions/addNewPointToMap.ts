import { actionEnums } from "../common/actionEnums"
import { BasicAction } from "../common/actionTypes";
import { Point } from "../common/Point";

export const addNewPointToMap = (newPoint: Point): BasicAction => ({
    type: actionEnums.ADD_NEW_POINT_TO_MAP,
    payload: newPoint,
});
