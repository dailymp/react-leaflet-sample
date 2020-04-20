import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Map from './src/Map';
import MapWidgetContainer from './src/containers/ClusterMapContainer';
import GeoJsonMap from './src/GeoJsonMap';

ReactDOM.render(<MapWidgetContainer />, document.getElementById('map'));
