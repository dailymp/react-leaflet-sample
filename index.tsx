import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Map from './src/Map';
import ClusterMap from './src/ClusterMap';
import GeoJsonMap from './src/GeoJsonMap';

ReactDOM.render(<ClusterMap />, document.getElementById('map'));
