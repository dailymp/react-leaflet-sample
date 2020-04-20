import * as React from "react";
import { Map as LeafletMap, GeoJSON } from "react-leaflet";
import Pins from "../Pins";
import worldGeoJSON from "geojson-world-map";
import { Point } from "../common/Point";

const newPointColor = '#00e600';

interface Props {
  pins: Point[];
  onAddNewPoint: (newPoint: Point) => void;
}

class MapWidget extends React.Component<Props, {}> {
  render() {
    return (
      <LeafletMap
        center={[50, 10]}
        zoom={6}
        maxZoom={10}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
        onclick={(evt) => {
          this.props.onAddNewPoint({
            x: evt.latlng.lat, 
            y: evt.latlng.lng, 
            hexadecimalColor: newPointColor,
          });
        }}
      >
        <GeoJSON
          data={worldGeoJSON}
          style={() => ({
            color: "#4a83ec",
            weight: 0.5,
            fillColor: "#1a1d62",
            fillOpacity: 1,
          })}
        />
        <Pins {...this.props} />
      </LeafletMap>
    );
  }
}

export default MapWidget;
