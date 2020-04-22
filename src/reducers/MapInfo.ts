import { BasicAction } from "../common/actionTypes";
import { actionEnums } from "../common/actionEnums";
import { Point } from "../common/Point";

export interface MapInfoState {
    pins: Point[];
}

const defaultPointColor = '#fc4b51';

const defaultMapInfoState = () : MapInfoState => {
  let pins: Point[] = [];
  for (let i = 0; i < 5000; i++) {
    pins.push({
      x: Math.floor(Math.random() * 50),
      y: Math.floor(Math.random() * 50),
      hexadecimalColor: defaultPointColor,
    });
  }
  return ({
    pins,
  });
};

export const mapInfoReducer = (state = defaultMapInfoState(), action: BasicAction): MapInfoState => {
  switch(action.type) {
    case actionEnums.ADD_NEW_POINT_TO_MAP:
      return handleAddNewPointToMap(state, action.payload);
    case actionEnums.SET_POINT_DATA:
      return handleSetPointData(state, action.payload);
  }
  return state;
}

const handleAddNewPointToMap = (state: MapInfoState, newPoint: Point): MapInfoState => {
  const pins = state.pins.map(pin => ({
    x: pin.x,
    y: pin.y,
    hexadecimalColor: pin.hexadecimalColor
  }));

  pins.push(newPoint);

  return {
    ...state,
    pins,
  };
}

const handleSetPointData = (state: MapInfoState, newPointData: Point[]): MapInfoState => {
  return {
    ...state,
    pins: newPointData,
  }
}
