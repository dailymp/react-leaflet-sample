import * as React from 'react';
import { CircleMarker } from 'react-leaflet';
import './map-widget.css';
import { LatLngExpression } from 'leaflet';

interface Props {
  key: string;
  center: LatLngExpression;
  color: string;
  fillColor: string;
  radius: number;
  opacity: number;
}

class Pin extends React.Component<Props, {}> {
  render() {
    return (
      <CircleMarker
        className="circle"
        center={this.props.center}
        fillOpacity={this.props.opacity}
        weight={0}
        {...this.props}
      />
    );
  }
}

export default Pin;
