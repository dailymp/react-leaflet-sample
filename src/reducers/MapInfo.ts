export interface MapInfoState {
    pins: number[][];
}

const defaultMapInfoState = () : MapInfoState => {
  let pins: number[][] = [];
  for (let i = 0; i < 5000; i++) {
    pins.push([
      Math.floor(Math.random() * 50),
      Math.floor(Math.random() * 50),
    ]);
  }
  
  return ({
    pins,
  });
};

export const mapInfoReducer = (state = defaultMapInfoState(), action): MapInfoState => {
  return state;
}