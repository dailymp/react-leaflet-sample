import { Point } from "../common/Point";
import { BasicAction } from "../common/actionTypes";
import { actionEnums } from "../common/actionEnums";

export const setPointData = (newPointData: Point[]): BasicAction => ({
    type: actionEnums.SET_POINT_DATA,
    payload: newPointData,
});
