import * as React from "react";
import { Map as LeafletMap, GeoJSON } from "react-leaflet";
import Pins from "./Pins";
import worldGeoJSON from "geojson-world-map";

interface Props {

}

interface State {
  pins: number[][];
}

class MapWidget extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    let pins: number[][] = [];
    for (let i = 0; i < 5000; i++) {
      pins.push([
        Math.floor(Math.random() * 50),
        Math.floor(Math.random() * 50),
      ]);
    }
    this.state = {
      pins,
    };
  }

  render() {
    const pins: number[][] = this.state.pins;

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
        <Pins {...this.props} pins={pins} />
      </LeafletMap>
    );
  }
}

export default MapWidget;
