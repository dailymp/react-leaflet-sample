import {combineReducers} from 'redux';
import {MapInfoState, mapInfoReducer} from './MapInfo';

export interface State {
    mapInfoReducer: MapInfoState;
}

export const reducers = combineReducers<State>({
    mapInfoReducer,
});
