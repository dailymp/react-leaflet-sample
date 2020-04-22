import { MapInfoState, mapInfoReducer } from "./MapInfo";
import { BasicAction } from "../common/actionTypes";
import { Point } from "../common/Point";
import { actionEnums } from "../common/actionEnums";

const buildTestState = () : MapInfoState => ({
    pins: [
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
    ]
});

const getExamplePinToAdd = (): Point => ({
    x: 6,
    y: 7,
    hexadecimalColor: '#00e600',
});

const getExamplePinData = (): Point[] => ([
    {
        x: 45,
        y: 89,
        hexadecimalColor: '#00e700',
    },
    {
        x: 29,
        y: 10,
        hexadecimalColor: '#00e600',
    },
]);

const getWrongAction = (): BasicAction => ({
    type: 'AAA1111wRoNgggg...',
    payload: getExamplePinToAdd(),
});

describe('Testing reducers for MapInfoState', () => {
    it('Add new pin to map', () => {
        const pinToAdd: Point = getExamplePinToAdd();
        const state: MapInfoState = buildTestState();
        const action: BasicAction = {
            type: actionEnums.ADD_NEW_POINT_TO_MAP,
            payload: pinToAdd,
        };

        const newState = mapInfoReducer(state, action);
        const lastPin = newState.pins[newState.pins.length - 1];

        expect(newState.pins.length).toBe(state.pins.length + 1);
        expect(lastPin.x).toBe(pinToAdd.x);
        expect(lastPin.y).toBe(pinToAdd.y);
        expect(lastPin.hexadecimalColor).toBe(pinToAdd.hexadecimalColor);
    });

    it('Set new pin data', () => {
        const pinsData: Point[] = getExamplePinData();
        const state: MapInfoState = buildTestState();
        const action: BasicAction = {
            type: actionEnums.SET_POINT_DATA,
            payload: pinsData,
        };

        const newState = mapInfoReducer(state, action);

        expect(newState.pins.length).toBe(pinsData.length);
        if (newState.pins.length > 0 && pinsData.length > 0) {
            expect(newState.pins[0].x).toBe(pinsData[0].x);
            expect(newState.pins[0].y).toBe(pinsData[0].y);
            expect(newState.pins[0].hexadecimalColor).toBe(pinsData[0].hexadecimalColor);
        }
    });

    it("Wrong action type doesn't modify the state", () => {
        const state: MapInfoState = buildTestState();
        const action: BasicAction = getWrongAction();

        const newState = mapInfoReducer(state, action);

        expect(newState.pins.length).toBe(state.pins.length);
        if (newState.pins.length > 0 && state.pins.length > 0) {
            expect(newState.pins[0].x).toBe(state.pins[0].x);
            expect(newState.pins[0].y).toBe(state.pins[0].y);
            expect(newState.pins[0].hexadecimalColor).toBe(state.pins[0].hexadecimalColor);
        }
    });
});