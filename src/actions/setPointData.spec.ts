import { Point } from "../common/Point";
import { BasicAction } from "../common/actionTypes";
import { setPointData } from "./setPointData";
import { actionEnums } from "../common/actionEnums";

describe('Create a "set point data" action test', () => {
    it('action created correctly', () => {
        const points: Point[] = [
            {
                x: 2,
                y: 3,
                hexadecimalColor: '#fc4b51',
            },
            {
                x: 4,
                y: 1,
                hexadecimalColor: '#fc4b51',
            },
        ];

        const action: BasicAction = setPointData(points);

        expect(action.type).toBe(actionEnums.SET_POINT_DATA);
        expect(action.payload[0].x).toBe(points[0].x);
        expect(action.payload[0].y).toBe(points[0].y);
        expect(action.payload[0].hexadecimalColor).toBe(points[0].hexadecimalColor);
        expect(action.payload[1].x).toBe(points[1].x);
        expect(action.payload[1].y).toBe(points[1].y);
        expect(action.payload[1].hexadecimalColor).toBe(points[1].hexadecimalColor);
        
    });
});