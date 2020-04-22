import { Point } from "../common/Point";
import { BasicAction } from "../common/actionTypes";
import { actionEnums } from "../common/actionEnums";
import { addNewPointToMap } from "./addNewPointToMap";

describe('Create a "add new point to map" action test', () => {
    it('action created correctly', () => {
        const point: Point = {
            x: 2,
            y: 3,
            hexadecimalColor: '#fc4b51',
        };

        const action: BasicAction = addNewPointToMap(point);

        expect(action.type).toBe(actionEnums.ADD_NEW_POINT_TO_MAP);
        expect(action.payload.x).toBe(point.x);
        expect(action.payload.y).toBe(point.y);
        expect(action.payload.hexadecimalColor).toBe(point.hexadecimalColor);
    });
});
