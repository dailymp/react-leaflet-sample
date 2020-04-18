import * as React from 'react';
import * as L from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import 'react-leaflet-markercluster/dist/styles.min.css';
import Pin from './Pin';
import './map-widget.less';

interface Props {
  pins: number[][];
}

interface MarkerStyle {
  color: string;
  fillColor: string;
  opacity: number;
  radius: number;
}

interface IconOptions {
  cluster: string;
  circle1: string;
  circle2: string;
  circle3: string;
  circle4: string;
  label: string;
}

const markerStyle: MarkerStyle = {
  color: '#fc4b51',
  fillColor: "#fc4b51",
  opacity: 1,
  radius: 5,
};

const hexToRgb = (hex: string, opacity?: number): string => {
  if (!hex.startsWith('#')) return hex;
  const hashless: string = hex.slice(1);
  const num: number = parseInt(
    hashless.length === 3
      ? hashless.split('').map(c => c.repeat(2)).join('')
      : hashless,
    16,
  );
  const red: number = num >> 16;
  const green: number = (num >> 8) & 255;
  const blue: number = num & 255;

  if (opacity) {
    return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
  }
  return `rgb(${red}, ${green}, ${blue})`;
};

const createOptions = (size: string): IconOptions => {
  return {
    cluster: `markerCluster${size}`,
    circle1: `markerCluster${size}DivOne`,
    circle2: `markerCluster${size}DivTwo`,
    circle3: `markerCluster${size}DivThree`,
    circle4: `markerCluster${size}DivFour`,
    label: `markerCluster${size}Label`,
  };
};

const calcSize = (numberOfClusterChildren: number): string => {
  let size = 'LargeXL';
  if (numberOfClusterChildren < 10) {
    size = 'Small';
  }
  else if (numberOfClusterChildren >= 10 && numberOfClusterChildren < 100) {
    size = 'Medium';
  }
  else if (numberOfClusterChildren >= 100 && numberOfClusterChildren < 500) {
    size = 'Large';
  }
  return size;
}

const createClusterCustomIcon = (cluster) => {
  const count: number = cluster.getChildCount();
  const size: string = calcSize(count);
  const options: IconOptions = createOptions(size);

  const clusterColor: string = hexToRgb('#fc4b51');
  const circleStyle1 = `background-color: ${clusterColor.slice(0, -1)}, 0.05)`;
  const circleStyle2 = `background-color: ${clusterColor.slice(0, -1)}, 0.15)`;
  const circleStyle3 = `background-color: ${clusterColor.slice(0, -1)}, 0.25)`;
  const circleStyle4 = `background-color: ${clusterColor.slice(0, -1)}, 0.65)`;


  return L.divIcon({
    html:
      `<div style="${circleStyle1}" class="${options.circle1}">
        <div style="${circleStyle2}" class="${options.circle2}">
          <div style="${circleStyle3}" class="${options.circle3}">
            <div style="${circleStyle4}" class="${options.circle4}">
              <span class="${options.label}">${count}</span>
            </div>
          </div>
        </div>
      </div>`,
    className: `${options.cluster}`,
  });
};

const Pins = (props: Props) => {
  const { pins } = props;

  const Markers = pins
    .map((p, i) => (
      <Pin
        key={`${p.toString()}-${i}`}
        center={[p[0], p[1]]}
        {...markerStyle}
      />
    ));

  return (
    <MarkerClusterGroup
      iconCreateFunction={createClusterCustomIcon}
      showCoverageOnHover={false}
      spiderfyOnMaxZoom={true}
      spiderLegPolylineOptions={{
        weight: 0,
        opacity: 0,
      }}
      removeOutsideVisibleBounds={true}
    >
      {Markers}
    </MarkerClusterGroup>
  );
};

export default Pins;
