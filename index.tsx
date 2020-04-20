import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducers } from './src/reducers';
import Map from './src/Map';
import MapWidgetContainer from './src/containers/ClusterMapContainer';
import GeoJsonMap from './src/GeoJsonMap';

const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <MapWidgetContainer />
    </Provider>,
    document.getElementById('map'));

