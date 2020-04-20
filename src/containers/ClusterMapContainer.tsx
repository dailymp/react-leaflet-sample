import * as React from "react";
import ClusterMap from '../components/ClusterMap';

interface State {
  pins: number[][];
}

class MapWidgetContainer extends React.Component<{}, State> {

  constructor(props) {
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
      <ClusterMap pins={pins} />
    );
  }
}

export default MapWidgetContainer;
